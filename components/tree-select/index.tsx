import type { App, ExtractPropTypes, Plugin, PropType } from 'vue';
import { computed, ref, watchEffect } from 'vue';
import { defineComponent } from 'vue';
import VcTreeSelect, {
  TreeNode,
  SHOW_ALL,
  SHOW_PARENT,
  SHOW_CHILD,
  treeSelectProps as vcTreeSelectProps,
} from '../vc-tree-select';
import classNames from '../_util/classNames';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import type { SizeType } from '../config-provider';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import CaretDownOutlined from '@ant-design/icons-vue/CaretDownOutlined';
import type { DefaultValueType, FieldNames } from '../vc-tree-select/interface';
import omit from '../_util/omit';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
import devWarning from '../vc-util/devWarning';
import getIcons from '../select/utils/iconUtil';
import renderSwitcherIcon from '../tree/utils/iconUtil';
import type { AntTreeNodeProps } from '../tree/Tree';
import { warning } from '../vc-util/warning';

const getTransitionName = (rootPrefixCls: string, motion: string, transitionName?: string) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

type RawValue = string | number;

export interface LabeledValue {
  key?: string;
  value: RawValue;
  label: any;
}

export type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[];

export interface RefTreeSelectProps {
  focus: () => void;
  blur: () => void;
}
export const treeSelectProps = {
  ...omit(vcTreeSelectProps<DefaultValueType>(), ['showTreeIcon', 'treeMotion', 'inputIcon']),
  suffixIcon: PropTypes.any,
  size: { type: String as PropType<SizeType> },
  bordered: { type: Boolean, default: undefined },
  replaceFields: { type: Object as PropType<FieldNames> },
};
export type TreeSelectProps = Partial<ExtractPropTypes<typeof treeSelectProps>>;

const TreeSelect = defineComponent({
  TreeNode,
  SHOW_ALL,
  SHOW_PARENT,
  SHOW_CHILD,
  name: 'ATreeSelect',
  inheritAttrs: false,
  props: initDefaultProps(treeSelectProps, {
    transitionName: 'slide-up',
    choiceTransitionName: '',
    listHeight: 256,
    treeIcon: false,
    listItemHeight: 26,
    bordered: true,
  }),
  slots: [
    'title',
    'titleRender',
    'placeholder',
    'maxTagPlaceholder',
    'treeIcon',
    'switcherIcon',
    'notFoundContent',
  ],
  setup(props, { attrs, slots, expose, emit }) {
    warning(
      !(props.treeData === undefined && slots.default),
      '`children` of Tree is deprecated. Please use `treeData` instead.',
    );
    watchEffect(() => {
      devWarning(
        props.multiple !== false || !props.treeCheckable,
        'TreeSelect',
        '`multiple` will alway be `true` when `treeCheckable` is true',
      );
      devWarning(
        props.replaceFields === undefined,
        'TreeSelect',
        '`replaceFields` is deprecated, please use fieldNames instead',
      );
    });
    const {
      configProvider,
      prefixCls,
      renderEmpty,
      direction,
      virtual,
      dropdownMatchSelectWidth,
      size,
      getPopupContainer,
    } = useConfigInject('select', props);
    const treePrefixCls = computed(() =>
      configProvider.getPrefixCls('select-tree', props.prefixCls),
    );
    const treeSelectPrefixCls = computed(() =>
      configProvider.getPrefixCls('tree-select', props.prefixCls),
    );

    const mergedDropdownClassName = computed(() =>
      classNames(props.dropdownClassName, `${treeSelectPrefixCls.value}-dropdown`, {
        [`${treeSelectPrefixCls.value}-dropdown-rtl`]: direction.value === 'rtl',
      }),
    );

    const isMultiple = computed(() => !!(props.treeCheckable || props.multiple));

    const treeSelectRef = ref();
    expose({
      focus() {
        treeSelectRef.value.focus?.();
      },

      blur() {
        treeSelectRef.value.blur?.();
      },
    });

    const handleChange = (...args: any[]) => {
      emit('update:value', args[0]);
      emit('change', ...args);
    };
    const handleTreeExpand = (...args: any[]) => {
      emit('update:treeExpandedKeys', args[0]);
      emit('treeExpand', ...args);
    };
    const handleSearch = (...args: any[]) => {
      emit('update:searchValue', args[0]);
      emit('search', ...args);
    };
    return () => {
      const {
        notFoundContent = slots.notFoundContent?.(),
        prefixCls: customizePrefixCls,
        bordered,
        listHeight,
        listItemHeight,
        multiple,
        treeIcon,
        transitionName,
        choiceTransitionName,
        treeLine,
        switcherIcon = slots.switcherIcon?.(),
        fieldNames = props.replaceFields,
      } = props;
      // ===================== Icons =====================
      const { suffixIcon, removeIcon, clearIcon } = getIcons(
        {
          ...props,
          multiple: isMultiple.value,
          prefixCls: prefixCls.value,
        },
        slots,
      );

      // ===================== Empty =====================
      let mergedNotFound;
      if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
      } else {
        mergedNotFound = renderEmpty.value('Select');
      }
      // ==================== Render =====================
      const selectProps = omit(props as typeof props & { itemIcon: any; switcherIcon: any }, [
        'suffixIcon',
        'itemIcon',
        'removeIcon',
        'clearIcon',
        'switcherIcon',
      ]);

      const mergedClassName = classNames(
        !customizePrefixCls && treeSelectPrefixCls.value,
        {
          [`${prefixCls.value}-lg`]: size.value === 'large',
          [`${prefixCls.value}-sm`]: size.value === 'small',
          [`${prefixCls.value}-rtl`]: direction.value === 'rtl',
          [`${prefixCls.value}-borderless`]: !bordered,
        },
        attrs.class,
      );
      const rootPrefixCls = configProvider.getPrefixCls();
      return (
        <VcTreeSelect
          {...attrs}
          virtual={virtual.value}
          dropdownMatchSelectWidth={dropdownMatchSelectWidth.value}
          {...selectProps}
          fieldNames={fieldNames}
          ref={treeSelectRef}
          prefixCls={prefixCls.value}
          class={mergedClassName}
          listHeight={listHeight}
          listItemHeight={listItemHeight}
          inputIcon={suffixIcon}
          multiple={multiple}
          removeIcon={removeIcon}
          clearIcon={clearIcon}
          switcherIcon={(nodeProps: AntTreeNodeProps) =>
            renderSwitcherIcon(treePrefixCls.value, switcherIcon, treeLine, nodeProps)
          }
          showTreeIcon={treeIcon as any}
          notFoundContent={mergedNotFound}
          getPopupContainer={getPopupContainer.value}
          treeMotion={null}
          dropdownClassName={mergedDropdownClassName.value}
          choiceTransitionName={getTransitionName(rootPrefixCls, '', choiceTransitionName)}
          transitionName={getTransitionName(rootPrefixCls, 'slide-up', transitionName)}
          onChange={handleChange}
          onSearch={handleSearch}
          onTreeExpand={handleTreeExpand}
          v-slots={{
            ...slots,
            treeCheckable: () => <span class={`${prefixCls.value}-tree-checkbox-inner`} />,
          }}
          children={slots.default?.()}
        />
      );
    };
  },

  methods: {
    saveTreeSelect(node: any) {
      this.vcTreeSelect = node;
    },
    focus() {
      this.vcTreeSelect.focus();
    },

    blur() {
      this.vcTreeSelect.blur();
    },
    renderSwitcherIcon(prefixCls: string, { isLeaf, loading }) {
      if (loading) {
        return <LoadingOutlined class={`${prefixCls}-switcher-loading-icon`} />;
      }
      if (isLeaf) {
        return null;
      }
      return <CaretDownOutlined class={`${prefixCls}-switcher-icon`} />;
    },
    handleChange(...args: any[]) {
      this.$emit('update:value', args[0]);
      this.$emit('change', ...args);
    },
    handleTreeExpand(...args: any[]) {
      this.$emit('update:treeExpandedKeys', args[0]);
      this.$emit('treeExpand', ...args);
    },
    handleSearch(...args: any[]) {
      this.$emit('update:searchValue', args[0]);
      this.$emit('search', ...args);
    },
    updateTreeData(treeData: any[]) {
      const { $slots } = this;
      const defaultFields = {
        children: 'children',
        title: 'title',
        key: 'key',
        label: 'label',
        value: 'value',
      };
      const replaceFields = { ...defaultFields, ...this.$props.replaceFields };
      return treeData.map(item => {
        const { slots = {} } = item;
        const label = item[replaceFields.label];
        const title = item[replaceFields.title];
        const value = item[replaceFields.value];
        const key = item[replaceFields.key];
        const children = item[replaceFields.children];
        let newLabel = typeof label === 'function' ? label() : label;
        let newTitle = typeof title === 'function' ? title() : title;
        if (!newLabel && slots.label && $slots[slots.label]) {
          newLabel = <>{$slots[slots.label](item)}</>;
        }
        if (!newTitle && slots.title && $slots[slots.title]) {
          newTitle = <>{$slots[slots.title](item)}</>;
        }
        const treeNodeProps = {
          ...item,
          title: newTitle || newLabel,
          value,
          dataRef: item,
          key,
        };
        if (children) {
          return { ...treeNodeProps, children: this.updateTreeData(children) };
        }
        return treeNodeProps;
      });
    },
  },
});

/* istanbul ignore next */
TreeSelect.install = function (app: App) {
  app.component(TreeSelect.name, TreeSelect);
  app.component(TreeSelect.TreeNode.displayName, TreeSelect.TreeNode);
  return app;
};

export const TreeSelectNode = TreeSelect.TreeNode;

export default TreeSelect as typeof TreeSelect &
  Plugin & {
    readonly TreeNode: typeof TreeNode;

    readonly SHOW_ALL: typeof SHOW_ALL;

    readonly SHOW_PARENT: typeof SHOW_PARENT;

    readonly SHOW_CHILD: typeof SHOW_CHILD;
  };
