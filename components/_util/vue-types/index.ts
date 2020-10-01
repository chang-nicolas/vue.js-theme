import { PropType } from 'vue';
import isPlainObject from 'lodash-es/isPlainObject';
import { toType, getType, isFunction, validateType, isInteger, isArray, warn } from './utils';
interface BaseTypes {
  type: any;
  def: Function;
  validator: Function;
}
const PropTypes = {
  get any() {
    return toType('any', {
      type: null,
    });
  },

  get func() {
    return {
      type: Function,
    };
  },

  get bool() {
    return {
      type: Boolean,
    };
  },

  get string() {
    return {
      type: String,
    };
  },

  get number() {
    return {
      type: Number,
    };
  },

  get array() {
    return {
      type: Array,
    };
  },

  get object() {
    return {
      type: Object,
    };
  },

  get integer() {
    return {
      type: Number,
      validator(value: number) {
        return isInteger(value);
      },
    };
  },

  get symbol() {
    return {
      type: null,
      validator(value: Symbol) {
        return typeof value === 'symbol';
      },
    };
  },

  custom(validatorFn: Function, warnMsg = 'custom validation failed') {
    if (typeof validatorFn !== 'function') {
      throw new TypeError('[VueTypes error]: You must provide a function as argument');
    }

    return toType(validatorFn.name || '<<anonymous function>>', {
      validator(...args: any[]) {
        const valid = validatorFn(...args);
        if (!valid) warn(`${this._vueTypes_name} - ${warnMsg}`);
        return valid;
      },
    });
  },

  tuple<T>() {
    return {
      type: (String as unknown) as PropType<T>,
    };
  },

  oneOf<T extends readonly any[]>(arr: T) {
    if (!isArray(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }
    const msg = `oneOf - value should be one of "${arr.join('", "')}"`;
    const allowedTypes = arr.reduce((ret, v) => {
      if (v !== null && v !== undefined) {
        const constr = (v as any).constructor;
        ret.indexOf(constr) === -1 && ret.push(constr);
      }
      return ret;
    }, []);

    return toType('oneOf', {
      type: allowedTypes.length > 0 ? allowedTypes : null,
      validator(value: unknown) {
        const valid = arr.indexOf(value) !== -1;
        if (!valid) warn(msg);
        return valid;
      },
    });
  },

  instanceOf<T>(instanceConstructor: T) {
    return {
      type: instanceConstructor,
    };
  },

  oneOfType(arr: any[]) {
    if (!isArray(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }

    let hasCustomValidators = false;

    const nativeChecks = arr.reduce((ret, type) => {
      if (isPlainObject(type)) {
        if (type._vueTypes_name === 'oneOf') {
          return ret.concat(type.type || []);
        }
        if (type.type && !isFunction(type.validator)) {
          if (isArray(type.type)) return ret.concat(type.type);
          ret.push(type.type);
        } else if (isFunction(type.validator)) {
          hasCustomValidators = true;
        }
        return ret;
      }
      ret.push(type);
      return ret;
    }, []);

    if (!hasCustomValidators) {
      // we got just native objects (ie: Array, Object)
      // delegate to Vue native prop check
      return toType('oneOfType', {
        type: nativeChecks,
      }).def(undefined);
    }

    const typesStr = arr
      .map(type => {
        if (type && isArray(type.type)) {
          return type.type.map(getType);
        }
        return getType(type);
      })
      .reduce((ret, type) => ret.concat(isArray(type) ? type : [type]), [])
      .join('", "');

    return this.custom(function oneOfType(value: any) {
      const valid = arr.some(type => {
        if (type._vueTypes_name === 'oneOf') {
          return type.type ? validateType(type.type, value, true) : true;
        }
        return validateType(type, value, true);
      });
      if (!valid) warn(`oneOfType - value type should be one of "${typesStr}"`);
      return valid;
    }).def(undefined);
  },

  arrayOf<T extends object>(type: T) {
    return toType('arrayOf', {
      type: Array as PropType<T[]>,
      validator(values: T[]) {
        const valid = values.every(value => validateType(type, value));
        if (!valid) warn(`arrayOf - value must be an array of "${getType(type)}"`);
        return valid;
      },
    });
  },

  objectOf(type: any) {
    return toType('objectOf', {
      type: Object,
      validator(obj: { [x: string]: any }) {
        const valid = Object.keys(obj).every(key => validateType(type, obj[key]));
        if (!valid) warn(`objectOf - value must be an object of "${getType(type)}"`);
        return valid;
      },
    });
  },

  shape(obj: { [x: string]: any; subscribe?: any; setState?: any; getState?: any }) {
    const keys = Object.keys(obj);
    const requiredKeys = keys.filter(key => obj[key] && obj[key].required === true);

    const type = toType('shape', {
      type: Object,
      validator(value: { [x: string]: any }) {
        if (!isPlainObject(value)) {
          return false;
        }
        const valueKeys = Object.keys(value);

        // check for required keys (if any)
        if (requiredKeys.length > 0 && requiredKeys.some(req => valueKeys.indexOf(req) === -1)) {
          warn(
            `shape - at least one of required properties "${requiredKeys.join(
              '", "',
            )}" is not present`,
          );
          return false;
        }

        return valueKeys.every(key => {
          if (keys.indexOf(key) === -1) {
            if (this._vueTypes_isLoose === true) return true;
            warn(`shape - object is missing "${key}" property`);
            return false;
          }
          const type = obj[key];
          return validateType(type, value[key]);
        });
      },
    });

    Object.defineProperty(type, '_vueTypes_isLoose', {
      enumerable: false,
      writable: true,
      value: false,
    });

    Object.defineProperty(type, 'loose', {
      get() {
        this._vueTypes_isLoose = true;
        return this;
      },
      enumerable: false,
    });

    return type;
  },
};

const typeDefaults = (): object => ({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  array: undefined,
  object: undefined,
  integer: undefined,
});

let currentDefaults = typeDefaults();

Object.defineProperty(PropTypes, 'sensibleDefaults', {
  enumerable: false,
  set(value) {
    if (value === false) {
      currentDefaults = {};
    } else if (value === true) {
      currentDefaults = typeDefaults();
    } else if (isPlainObject(value)) {
      currentDefaults = value;
    }
  },
  get() {
    return currentDefaults;
  },
});

export default PropTypes;
