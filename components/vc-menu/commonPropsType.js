import PropTypes from '../_util/vue-types';
export default {
  prefixCls: PropTypes.string.def('rc-menu'),
  focusable: PropTypes.looseBool.def(true),
  multiple: PropTypes.looseBool,
  defaultActiveFirst: PropTypes.looseBool,
  visible: PropTypes.looseBool.def(true),
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  defaultSelectedKeys: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).def([]),
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).def(
    [],
  ),
  openKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  mode: PropTypes.oneOf([
    'horizontal',
    'vertical',
    'vertical-left',
    'vertical-right',
    'inline',
  ]).def('vertical'),
  triggerSubMenuAction: PropTypes.string.def('hover'),
  subMenuOpenDelay: PropTypes.number.def(0.1),
  subMenuCloseDelay: PropTypes.number.def(0.1),
  level: PropTypes.number.def(1),
  inlineIndent: PropTypes.number.def(24),
  theme: PropTypes.oneOf(['light', 'dark']).def('light'),
  getPopupContainer: PropTypes.func,
  openTransitionName: PropTypes.string,
  forceSubMenuRender: PropTypes.looseBool.def(true),
  selectable: PropTypes.looseBool,
  isRootMenu: PropTypes.looseBool.def(true),
  builtinPlacements: PropTypes.object.def(() => ({})),
  itemIcon: PropTypes.any,
  expandIcon: PropTypes.any,
  overflowedIndicator: PropTypes.any,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  children: PropTypes.VNodeChild,
};
