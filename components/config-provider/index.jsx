import PropTypes from '../_util/vue-types';
import { filterEmpty } from '../_util/props-util';
import defaultRenderEmpty from './renderEmpty';

const ConfigProvider = {
  name: 'AConfigProvider',
  props: {
    getPopupContainer: PropTypes.func,
    prefixCls: PropTypes.string,
    renderEmpty: PropTypes.any,
    csp: PropTypes.any,
    autoInsertSpaceInButton: PropTypes.bool,
  },
  provide() {
    return {
      configProvider: {
        ...this.$props,
        renderEmpty: this.renderEmptySlots,
        getPrefixCls: this.getPrefixCls,
      },
    };
  },
  computed: {
    renderEmptySlots() {
      const customRender = (this.$scopedSlots && this.$scopedSlots['renderEmpty']) || this.$slots['renderEmpty'];
      return this.$props.renderEmpty || customRender || defaultRenderEmpty;
    },
  },
  methods: {
    getPrefixCls(suffixCls, customizePrefixCls) {
      const { prefixCls = 'ant' } = this.$props;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
    },
  },
  render() {
    return this.$slots.default ? filterEmpty(this.$slots.default) : null;
  },
};

export const ConfigConsumerProps = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return `ant-${suffixCls}`;
  },
  renderEmpty: defaultRenderEmpty,
};

/* istanbul ignore next */
ConfigProvider.install = function(Vue) {
  Vue.component(ConfigProvider.name, ConfigProvider);
};

export default ConfigProvider;
