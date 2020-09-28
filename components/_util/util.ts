export const isFunction = (val: unknown): val is Function => typeof val === 'function';

export const isArray = Array.isArray;
export const isString = (val: unknown): val is string => typeof val === 'string';
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol';
export const isObject = (val: unknown): val is object => val !== null && typeof val === 'object';
const onRE = /^on[^a-z]/;
const isOn = (key: string) => onRE.test(key);

const cacheStringFunction = fn => {
  const cache = Object.create(null);
  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(str => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str: string) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});

const capitalize = cacheStringFunction((str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val: object, key: string) => hasOwnProperty.call(val, key);

// change from vue sourcecode
function resolvePropValue(options, props, key, value) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, 'default');
    // default values
    if (hasDefault && value === undefined) {
      const defaultValue = opt.default;
      value = opt.type !== Function && isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    // boolean casting
    if (opt[0 /* shouldCast */]) {
      if (!hasOwn(props, key) && !hasDefault) {
        value = false;
      } else if (opt[1 /* shouldCastTrue */] && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}

export function getDataAndAriaProps(props: Record<string, unknown>) {
  return Object.keys(props).reduce((memo: Record<string, unknown>, key: string) => {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      memo[key] = props[key];
    }
    return memo;
  }, {});
}

export { isOn, cacheStringFunction, camelize, hyphenate, capitalize, resolvePropValue };
