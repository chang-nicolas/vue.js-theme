# Change Log (The following content is translated by Google)

`ant-design-vue` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

#### Release Schedule

- Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
- Monthly release: minor version at the end of every month for new features.
- Major version release is not included in this schedule for breaking change and new features.

---

## 3.0.0-alpha.13

`2021-11-28`

π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯

Publish Performant advanced table component Surely Vue

Official website οΌ [https://surely.cool/](https://surely.cool/)

GithubοΌ[https://github.com/surely-vue/table]

- π Upgrade ts, fix component type error [e28168](https://github.com/vueComponent/ant-design-vue/commit/e28168e0bed28a97ef8c7b33f80d03f6fd0b5a02)[#4908](https://github.com/vueComponent/ant-design-vue/issues/4908)[#4912](https://github.com/vueComponent/ant-design-vue/issues/4912)
- π Drawer visible is changed to optional to avoid reporting type errors in the writing of jsx v-model [#4908](https://github.com/vueComponent/ant-design-vue/issues/4908)
- π Fix the problem that the tabs moreIcon slot does not take effect [#4928](https://github.com/vueComponent/ant-design-vue/issues/4928)
- π Fix Button :disabled="false" when the style is wrong [#4930](https://github.com/vueComponent/ant-design-vue/issues/4930)
- π Fix the expansion component (Select, AutoComplete, TreeSelect), the animation direction is wrong, the expansion flashing problem [#4909](https://github.com/vueComponent/ant-design-vue/issues/4909)
- π Anchor class name fixed has no prefix, which leads to naming conflicts [#4931](https://github.com/vueComponent/ant-design-vue/issues/4931)

## 3.0.0-alpha.12

`2021-11-20`

- π Fix the problem that TimeRangePicker does not hide the panel correctly [#4902](https://github.com/vueComponent/ant-design-vue/issues/4902)
- π Fix the problem that TreeSelect is not cleared when resetting undefined [#4897](https://github.com/vueComponent/ant-design-vue/issues/4897)
- π Fix the issue that TreeSelect isLeaf does not take effect [#4883](https://github.com/vueComponent/ant-design-vue/issues/4883)
- π Fix Table rowSelection reporting loop response warning problem [#4885](https://github.com/vueComponent/ant-design-vue/issues/4885)
- π Fix the problem that Table rowSelection does not respond when dynamically updated [#4889](https://github.com/vueComponent/ant-design-vue/issues/4889)
- π Fix missing component types [#4863](https://github.com/vueComponent/ant-design-vue/issues/4863)

## 3.0.0-alpha.11

`2021-11-08`

- π Add codesanbox link to the document [#4861](https://github.com/vueComponent/ant-design-vue/issues/4861)
- π Fix Collapse animation loss problem [#4856](https://github.com/vueComponent/ant-design-vue/issues/4856)
- π Fix the warning problem when Table does not set dataIndex

## 3.0.0-alpha.10

`2021-11-05`

- π Fix the problem that Tree does not trigger loadData [#4835](https://github.com/vueComponent/ant-design-vue/issues/4835)
- π Fix Breadcrumb.Item click event not triggering issue [#4845](https://github.com/vueComponent/ant-design-vue/issues/4845)
- π Fix Checkbox sometimes not centered under Group [#4846](https://github.com/vueComponent/ant-design-vue/issues/4846)

## 3.0.0-alpha.9

`2021-11-03`

- π Fix requestAnimationFrame undefined error under ssr for some components [#4833](https://github.com/vueComponent/ant-design-vue/issues/4833)
- π Fix the problem that TreeSelect selectable and checkable cannot be closed [#4838](https://github.com/vueComponent/ant-design-vue/issues/4838)
- π Fix the problem that Tabs cannot be scrolled on the mobile terminal [#4828](https://github.com/vueComponent/ant-design-vue/issues/4828)
- π Fix InputNumber does not trigger inspection under form [#4831](https://github.com/vueComponent/ant-design-vue/issues/4831)
- π Fix that when Select uses `<a-select-option>` to build a node, the automatic word segmentation fails [#4844](https://github.com/vueComponent/ant-design-vue/issues/4844)

## 3.0.0-alpha.8

`2021-10-30`

- π Fix the missing component type [#4823](https://github.com/vueComponent/ant-design-vue/issues/4823)

## 3.0.0-alpha.7

`2021-10-29`

- π Form added validate event [#4817](https://github.com/vueComponent/ant-design-vue/issues/4817)
- π Tree provides ref to get internal state api [#4820](https://github.com/vueComponent/ant-design-vue/issues/4820)
- π Fix the width mutation problem when dragging Table [#4811](https://github.com/vueComponent/ant-design-vue/issues/4811)
- π Fix the problem that TreeSelect is empty and does not update when opened again [a5604b](https://github.com/vueComponent/ant-design-vue/commit/a5604bb96796b9ec0090d3ec0c6d32d13d0df740)

## 3.0.0-alpha.6

`2021-10-27`

- π Table add drag column feature

## 3.0.0-alpha.5

`2021-10-26`

- Table
  - π Fix sticky time reporting error [#4804](https://github.com/vueComponent/ant-design-vue/issues/4804) [#4808](https://github.com/vueComponent/ant-design-vue/issues/4808)
  - π Fix emptyText internationalization failure problem [#4805](https://github.com/vueComponent/ant-design-vue/issues/4805)
  - π Optimize performance issues when size changes [#4787](https://github.com/vueComponent/ant-design-vue/issues/4787)
- π useForm supports deep responsive rule [#4799](https://github.com/vueComponent/ant-design-vue/issues/4799)
- π Dropdown type supports text type [#4802](https://github.com/vueComponent/ant-design-vue/issues/4802)
- π Fix Menu reporting error on mobile terminal [#4794](https://github.com/vueComponent/ant-design-vue/issues/4794)
- π Fix the invalidation problem when checking the Tree custom fieldNames [#4790](https://github.com/vueComponent/ant-design-vue/issues/4790)
- π Fix api component internationalization failure problem [#4780](https://github.com/vueComponent/ant-design-vue/issues/4780)

## 3.0.0-alpha.4

`2021-10-20`

- Use shallowRef to improve performance in part of the component state [3a968f](https://github.com/vueComponent/ant-design-vue/commit/3a968fdd33960a788f2037d944aca4e8ee81294f)

## 3.0.0-alpha.3

`2021-10-08`

- Table
  - π Fix the problem that the sorting prompt does not display [f64d7a](https://github.com/vueComponent/ant-design-vue/commit/f64d7adb22952cfdd5bf642343335fd78460d745)
  - π Fix the responsive loss of some attributes [#4756](https://github.com/vueComponent/ant-design-vue/issues/4756)
- π Fix the problem that the default automatic calibration position of `Popover` and `Popconfirm` does not take effect [98b5e5](https://github.com/vueComponent/ant-design-vue/commit/98b5e5d53fd10620eddc2c386181f868ef941397)

## 3.0.0-alpha.2

`2021-10-08`

- π Fix the issue of referencing process.nextTick [#4737](https://github.com/vueComponent/ant-design-vue/issues/4737)

## 3.0.0-alpha.1

`2021-10-07`

- π Refactor `Tabs` [#4732](https://github.com/vueComponent/ant-design-vue/issues/4732)
  - Removed `prevClick`, `nextClick` events, and use `tabScroll` event instead
  - Obsolete the `tabBarExtraContent` slot, replace it with the rightExtra slot, and add the `leftExtra` slot
  - Added `addIcon`, `closeIcon`, `moreIcon` slots
- π Refactor `Card`, discard the tabList slots configuration, and use the customTab slot for unified configuration [#4732](https://github.com/vueComponent/ant-design-vue/issues/4732)
- π Refactor `Drawer`
  - Added `autofocus` `contentWrapperStyle` `footerStyle` `headerStyle` `push` `size` `forceRender` and other attributes
  - Added `closeIcon` `extra` `footer` and other slots
  - Deprecated `afterVisibleChange` property, use event with the same name instead
- π Fix the problem that `Table` pagination does not respond to changes [1add0d](https://github.com/vueComponent/ant-design-vue/commit/1add0d251cd35aa2c55404f7a60f1531425490c1)
- π Fix `notification` style misalignment problem [#4703](https://github.com/vueComponent/ant-design-vue/issues/4703)
- π Fix the selection, dragging and other abnormalities caused by `Tree` fieldsName [#4726](https://github.com/vueComponent/ant-design-vue/issues/4726)

## 3.0.0-alpha.0

`2021-09-24`

π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯

- Open source documentation
- Removed the `lazy` attribute of Transfer, it does not have a real optimization effect.
- Removed the `combobox` mode of Select, please use `AutoComplete` instead.
- Deprecated Button.Group, please use `Space` instead.
- `Timeline.Item` new label
- `Steps` added `responsive`, `percent`
- `Collapse` added `ghost`, `collapsible`
- `Popconfirm` added `cancelButton`, `okButton`, and `esc` button hiding
- `ConfigProvider` added ConfigProvider.config to define the configuration of `Modal.xxx` `message` `notification`
- `Tree` `TreeSelect`

  - Added virtual scrolling, discarded using `a-tree-node` `a-tree-select-node` to build nodes, using `treeData` property instead to improve component performance
  - Deprecated `scopedSlots` `slots` custom rendering node, and replace it with `v-slot:title` to improve ease of use, avoid slot configuration expansion, and also avoid slot conflicts

- `Table`

  - Removed the `rowSelection.hideDefaultSelections` property of Table, please use `SELECTION_ALL` and `SELECTION_INVERT` in `rowSelection.selections` instead, [custom options](/components/table/#components-table-demo- row-selection-custom).
  - Removed Column slots and replaced them with `v-slot:headerCell` `v-slot:headerCell` `v-slot:bodyCell` `v-slot:customFilterDropdown` `v-slot:customFilterIcon` to improve ease of use , To avoid slot configuration expansion, but also to avoid the problem of slot conflicts
  - Added expandFixed to control whether the expanded icon is fixed
  - Added the showSorterTooltip header whether to display the tooltip for the next sort.
  - Added sticky for setting sticky head and scroll bar
  - Added rowExpandable to set whether to allow row expansion
  - New slot headerCell is used to personalize the header cell
  - Added slot bodyCell for personalized cell
  - New slot customFilterDropdown is used to customize the filter menu, which needs to be used with `column.customFilterDropdown`
  - Added slot customFilterIcon for custom filter icons
  - New slot emptyText is used to customize the display content of empty data
  - Added slot summary for the summary column

- `DatePicker` `TimePicker` `Calendar`

  - By default, a more lightweight dayjs is used to replace momentjs. If your project is too large and uses a lot of momentjs methods, you can refer to the document [Custom Time Library](/docs/vue/replace-date-cn), Replace with momentjs.
  - UI interaction adjustment, its antd 4.x interaction specification

- `Form` The main goal of this update is to improve performance. If you don't have custom form controls, you can almost ignore this part

  - Since version 3.0, Form.Item no longer hijacks child elements, but automatically checks through provider/inject dependency injection. This method can improve component performance, and there is no limit to the number of child elements. The same is true for child elements. It can be a high-level component that is further encapsulated.

    You can reference [Customized Form Controls](#components-form-demo-customized-form-controls)

    But it also has some disadvantages:

    1. If the custom component wants Form.Item to be verified and displayed, you need to inject `const {id, onFieldChange, onFieldBlur} = useFormItemContext()` and call the corresponding method.

    2. A Form.Item can only collect the data of one form item. If there are multiple form items, it will cause collection confusion, for example,

    ```html
    <a-form-item>
      <a-input name="a"></a-input>
      <a-input name="b"></a-input>
    </a-form-item>
    ```

    As above Form.Item does not know whether to collect `name="a"` or `name=`b``, you can solve this kind of problem in the following two ways:

    The first is to use multiple `a-form-item`:

    ```html
    <a-form-item>
      <a-input name="a"></a-input>
      <a-form-item><a-input name="b"></a-input></a-form-item>
    </a-form-item>
    ```

    The second way is to wrap it with a custom component and call `useFormItemContext` in the custom component, It is equivalent to merging multiple form items into one.

    ```html
    <script>
      // custom component
      import { Form } from 'ant-desing-vue';
      export default {
        name: 'custom-name',
        setup() {
          const formItemContext = Form.useFormItemContext();
        },
      };
    </script>
    ```

    ```html
    <a-form-item>
      <custom-com>
        <a-input name="a"></a-input>
        <a-input name="b"></a-input>
      </custom-com>
    </a-form-item>
    ```

    Third, the component library provides an `a-form-item-rest` component, which will prevent data collection. You can put form items that do not need to be collected and verified into this component. It is the same as the first This method is very similar, but it does not generate additional dom nodes.

    ```html
    <a-form-item>
      <a-input name="a"></a-input>
      <a-form-item-rest><a-input name="b"></a-input></a-form-item-rest>
    </a-form-item>
    ```

## 2.2.8

`2021-09-17`

- π Upload method supports patch [#4637](https://github.com/vueComponent/ant-design-vue/issues/4637)
- π List gutter supports array [d2b721](https://github.com/vueComponent/ant-design-vue/commit/d2b72143f0e15c8716b4ea8f68b2b72eff5cf510)
- π Fix Modal type error [#4632](https://github.com/vueComponent/ant-design-vue/issues/4632)
- π Fix the problem that AutoComplete cannot reset undefined [741718](https://github.com/vueComponent/ant-design-vue/commit/741718a0f92c790266e7a07d8d129c5673344a7e)
- π Fix the missing style of Tag closed icon [#4649](https://github.com/vueComponent/ant-design-vue/issues/4649)
- π Fix the problem that the TreeSelect clear button does not display under special conditions [#4655](https://github.com/vueComponent/ant-design-vue/issues/4655)
- π Fix useForm immdiate not working issue [#4646](https://github.com/vueComponent/ant-design-vue/issues/4646)

## 2.2.7

`2021-09-08`

- π Menu supports overflowedIndicator slot [#4515](https://github.com/vueComponent/ant-design-vue/issues/4515)
- π useForm supports dynamic rule [#4498](https://github.com/vueComponent/ant-design-vue/issues/4498)
- π Select supports Number type [#4570](https://github.com/vueComponent/ant-design-vue/issues/4570)
- π Fix the warning problem caused by css zoom [#4554](https://github.com/vueComponent/ant-design-vue/issues/4554)
- π Fix Mentions input Chinese error report [#4524](https://github.com/vueComponent/ant-design-vue/issues/4524)
- π Fix the issue that AutoComplete does not support global prefixCls [#4566](https://github.com/vueComponent/ant-design-vue/issues/4566)
- π Fix Table nested table error report [#4600](https://github.com/vueComponent/ant-design-vue/issues/4600)
- π Fix MenuItem danger property under Dropdown has no style problem [#4618](https://github.com/vueComponent/ant-design-vue/issues/4618)
- π Fix Modal.xxx and other methods passing appContext invalid problem [#4627](https://github.com/vueComponent/ant-design-vue/issues/4627)
- π Fix some TS type errors

## 2.2.6

`2021-08-12`

- π Fix `Table` expanded list rendering problem [#4507](https://github.com/vueComponent/ant-design-vue/issues/4507)
- π Fix `Rate` custom `character` slot not taking effect [#4509](https://github.com/vueComponent/ant-design-vue/issues/4509)
- π Add resize-observer-polyfill to fix the problem of reporting errors in low versions of Chrome [#4508](https://github.com/vueComponent/ant-design-vue/issues/4508)

## 2.2.5

`2021-08-11`

- π `Select` supports customizing nodes through option slots [68c1f4](https://github.com/vueComponent/ant-design-vue/commit/68c1f4550108a3a6bbe4f1b2c5c168523fd6c84a)
- π Fix the problem that the pop-up window component in the development environment does not display in the lower version of chrome, and avoid the pop-up window flashing [#4409](https://github.com/vueComponent/ant-design-vue/issues/4409)
- π Fix the problem of not scrolling to the active position when `Select` is opened [ccb240](https://github.com/vueComponent/ant-design-vue/commit/ccb24016c07632f49550646c971060c402586c67)

## 2.2.4

`2021-08-10`

- π Support Vue@3.2 [#4490](https://github.com/vueComponent/ant-design-vue/issues/4490)
- π Automatically hide the horizontal scroll bar of `Table` [#4484](https://github.com/vueComponent/ant-design-vue/issues/4484)
- π Fix the issue of `Progress` trailColor not taking effect [#4483](https://github.com/vueComponent/ant-design-vue/issues/4483)

## 2.2.3

`2021-08-07`

- π Use `position: sticky` for the fixed column of `Table` to improve performance and solve the problem of misalignment in some scenes [38569c](https://github.com/vueComponent/ant-design-vue/commit/38569c28c7eb4eaa34f2cc096982daea901062d4)
- π `Collapse` supports number type key [#4405](https://github.com/vueComponent/ant-design-vue/issues/4405)
- π Optimize the flickering problem of `Tabs` when selected under windows [#4241](https://github.com/vueComponent/ant-design-vue/issues/4241)
- π `InputPassword` supports global setting prefixCls [#4430](https://github.com/vueComponent/ant-design-vue/issues/4430)
- π Fix `Select` cannot scroll issue [#4396](https://github.com/vueComponent/ant-design-vue/issues/4396)
- π Fix `Badge` error reporting under ssr [#4384](https://github.com/vueComponent/ant-design-vue/issues/4384)
- π Fix the issue of invalid data fields in `Form` [#4435](https://github.com/vueComponent/ant-design-vue/issues/4435)
- π Fix an error when the child element of `FormItem` is a native label [#4383](https://github.com/vueComponent/ant-design-vue/issues/4383)
- π Fix the error when `TreeSelect` customize title through slot [#4459](https://github.com/vueComponent/ant-design-vue/issues/4459)

## 2.2.2

`2021-07-11`

- π Switch added checkedValue and unCheckedValue attributes to customize checked binding value [#4329](https://github.com/vueComponent/ant-design-vue/issues/4329)
- π Fix the issue of missing SubMenu animation [#4325](https://github.com/vueComponent/ant-design-vue/issues/4325)
- π Fix that there is no red box problem when TimePicker validates the error under Form [#4331](https://github.com/vueComponent/ant-design-vue/issues/4331)
- π Fix UploadDragger does not support vite-plugin-components on-demand loading problem [#4334](https://github.com/vueComponent/ant-design-vue/issues/4334)
- π Fix the error when TreeSelect customize title through slot [1152e8](https://github.com/vueComponent/ant-design-vue/commit/1152e8cd71cadf9e8fb4797916adca20c0e35974)
- π Fix the dropdown submenu style loss issue [#4351](https://github.com/vueComponent/ant-design-vue/issues/4351)
- TS
  - Fix the type error of Table in ts 4.3.5 version [#4296](https://github.com/vueComponent/ant-design-vue/issues/4296)
  - Improve notification type [#4346](https://github.com/vueComponent/ant-design-vue/issues/4346)

## 2.2.1

`2021-07-06`

- π Fix the issue that the Space component does not take effect in browsers that do not support flex
- π Fix the issue of DatePicker triggering scrolling under safari [#4323](https://github.com/vueComponent/ant-design-vue/issues/4323)

## 2.2.0

`2021-07-06`

- π Refactor the Button component, remove type="danger", and add the `danger` attribute [#4291](https://github.com/vueComponent/ant-design-vue/issues/4291)
- π Fix Rate component not updating issue [#4294](https://github.com/vueComponent/ant-design-vue/issues/4294)
- π Fix Tree replaceFields error report [#4298](https://github.com/vueComponent/ant-design-vue/issues/4298)
- π Fix Modal missing parentContext type problem [#4305](https://github.com/vueComponent/ant-design-vue/issues/4305)

## 2.2.0-rc.1

`2021-06-29`

- π Change babel configuration, smaller build package size
- π Form provides the useForm function natively, and we will deprecate the @ant-design-vue/use library
- π Fix the issue that the Form validateFirst property does not trigger reject when there are multiple validation rules [#4273](https://github.com/vueComponent/ant-design-vue/issues/4273)
- π Fix List circular references causing errors in Vite [#4263](https://github.com/vueComponent/ant-design-vue/issues/4263)
- π Fix the missing item attribute problem in Menu event callback [#4290](https://github.com/vueComponent/ant-design-vue/issues/4290)

## 2.2.0-beta.6

`2021-06-26`

- π Menu performance optimization [e8b957](https://github.com/vueComponent/ant-design-vue/commit/e8b95784eb1ee0554b0d6b17bdc14e18775f2ae6)
- π Fix `Layout` `RangePicker` `WeekPicker` `Textarea` on-demand loading failure

## 2.2.0-beta.5

`2021-06-24`

- π Support vite-plugin-components to be loaded on demand
- π Refactor the List component
- π Select adds responsive folding option [656d14](https://github.com/vueComponent/ant-design-vue/commit/656d14fc4e4ef0f781324438f0d58cfb6816d583)
- π Fix the problem that the virtual list cannot be scrolled when the Select dynamic update option [b2aa49d](https://github.com/vueComponent/ant-design-vue/commit/b2aa49d064a83c6ce786a6bb4cd9fc5266a5964d)
- π Fix the incorrect location of Select keyboard events [604372](https://github.com/vueComponent/ant-design-vue/commit/604372ff2da521dd580ad5229f7dbd445c1c6190)
- π Fix the issue that AutoComplete does not support options slot [#4012](https://github.com/vueComponent/ant-design-vue/issues/4012)

## 2.2.0-beta.4

`2021-06-21`

- π Refactor Descriptions component [#4219](https://github.com/vueComponent/ant-design-vue/issues/4219)
- π Fix the issue that Countdown does not trigger the finish event [#4222](https://github.com/vueComponent/ant-design-vue/issues/4222)
- π Fix ConfigProvider reporting errors under vue 3.1 [#4225](https://github.com/vueComponent/ant-design-vue/issues/4225)
- π Fix the problem of using SubMenu under Dropdown to report an error [#4205](https://github.com/vueComponent/ant-design-vue/issues/4205)
- π Fix Col type error [#4226](https://github.com/vueComponent/ant-design-vue/issues/4226)
- π Fix the problem that onEnd is not triggered when Typography is out of focus [#4227](https://github.com/vueComponent/ant-design-vue/issues/4227)
- π Fix ImagePreview style loss problem [#4231](https://github.com/vueComponent/ant-design-vue/issues/4231)

## 2.2.0-beta.3

`2021-06-11`

- π Refactor Breadcrumb, Statistic, Tag components
- π Statistic supports loading attribute
- π Fix the problem of Menu rendering multiple sub-components to improve performance [6ae707](https://github.com/vueComponent/ant-design-vue/commit/6ae707edf508a9c5e8dca7dacf1410de5251bcf8)
- π Fix FormItem custom class invalidation [617e53](https://github.com/vueComponent/ant-design-vue/commit/617e534fda2ae6d468b5e9d3eb43370f8a4b0000)
- π Fix MenuDivider class error [#4195](https://github.com/vueComponent/ant-design-vue/issues/4195)
- π Fix Tag and Image type errors
- π Fix the issue of missing component animations such as Modal [#4191](https://github.com/vueComponent/ant-design-vue/issues/4191)
- π Fix the issue that Select class cannot be dynamically updated [#4194](https://github.com/vueComponent/ant-design-vue/issues/4194)
- π Fix the problem that the Dropdown mail expands and cannot be collapsed by clicking [#4198](https://github.com/vueComponent/ant-design-vue/issues/4198)
- π Fix the issue of missing some export methods of FormItem [#4183](https://github.com/vueComponent/ant-design-vue/issues/4183)

## 2.2.0-beta.2

`2021-06-08`

- π Fix PageHeader display extension problem [4de73](https://github.com/vueComponent/ant-design-vue/commit/4de7737907d485d3dd3be44b70e599cc53edb171)
- π Fix the problem that some components cannot be rendered normally under Vue3.1[#4173](https://github.com/vueComponent/ant-design-vue/issues/4173)
- π Fix Menu.Divider name error problem [6c5c84](https://github.com/vueComponent/ant-design-vue/commit/6c5c84a3fc4b8abcd7aed0922852a64e0ac293c7)

## 2.2.0-beta.1

`2021-06-17`

- π₯π₯π₯ Virtual Table independent library released https://www.npmjs.com/package/@surely-vue/table, this component is an independent library, the document example is not yet complete, it is a completely ts-developed component , There are good type hints, there are API documents on npm, those who are in a hurry can explore and use it, here is an online experience example, https://store.antdv.com/pro/preview/list/big-table-list
- π₯π₯π₯ Refactored a large number of components, the source code is more readable, the performance is better, and the ts type is more comprehensive -Refactored components in this version Anchor, Alert, Avatar, Badge, BackTop, Col, Form, Layout, Menu, Space, Spin, Switch, Row, Result, Rate
- π Menu

  - Better performance [#3300](https://github.com/vueComponent/ant-design-vue/issues/3300)
  - Fix the problem of incorrect highlighting [#4053](https://github.com/vueComponent/ant-design-vue/issues/4053)
  - Fix console invalid warning [#4169](https://github.com/vueComponent/ant-design-vue/issues/4169)
  - Easier to use, simpler to use single file recursion [#4133](https://github.com/vueComponent/ant-design-vue/issues/4133)
  - π icon icon needs to be passed through slot

- Skeleton

  - π Support Skeleton.Avatar placeholder component.
  - π Support Skeleton.Button placeholder component.
  - π Support Skeleton.Input placeholder component.

- π Destructive update

  - The `a-menu-item` and `a-sub-menu` icons need to be passed through the slot, and the icon is not automatically obtained through the sub-node
  - row gutter supports row-wrap, no need to use multiple rows to divide col
  - `Menu` removes `defaultOpenKeys` and `defaultSelectedKeys`; `Switch` removes `defaultChecked`; `Rate` removes `defaultValue`; Please be cautious to use the defaultXxx-named attributes of other unrefactored components, and they will be removed in future versions.

- π Added Avatar.Group component
- π Fix AutoComplete filterOptions not taking effect [#4170](https://github.com/vueComponent/ant-design-vue/issues/4170)
- π Fix Select automatic width invalidation problem [#4118](https://github.com/vueComponent/ant-design-vue/issues/4118)
- π Fix the lack of internationalized files in dist [#3684](https://github.com/vueComponent/ant-design-vue/issues/3684)

## 2.1.6

`2021-05-13`

- π Use vue@3.0.10 to rebuild to avoid console warning [#3998](https://github.com/vueComponent/ant-design-vue/issues/3998)

## 2.1.5

`2021-05-12`

- π Fix SSR time reporting error [#3983](https://github.com/vueComponent/ant-design-vue/issues/3983)

## 2.1.4

`2021-05-09`

- π Fix `Table` scrolling misalignment issue [#4045](https://github.com/vueComponent/ant-design-vue/issues/4045)
- π Fix `Typography` editable mode triggering link jump issue [#4105](https://github.com/vueComponent/ant-design-vue/issues/4105)
- π Fix the issue that `Carousel` variableWidth does not take effect [#3977](https://github.com/vueComponent/ant-design-vue/issues/3977)
- π Fix the problem that `TreeSelect` cannot delete parent and child nodes at the same time through the keyboard [#3508](https://github.com/vueComponent/ant-design-vue/issues/3508)
- π Fix some types of errors

## 2.1.3

`2021-04-25`

- πππ remove ads during npm installation
- π `Select`
  - Fix the first issue of default activation [#3842](https://github.com/vueComponent/ant-design-vue/issues/3842)
  - Fix group display abnormal problem [#3841](https://github.com/vueComponent/ant-design-vue/issues/3841)
  - Fix scrolling abnormal issue after dynamically updating selections [#3972](https://github.com/vueComponent/ant-design-vue/issues/3972)
- π Fix the issue that `Checkbox` triggers twice `update:checked` [#3838](https://github.com/vueComponent/ant-design-vue/issues/3838)
- π `Table` column group supports fixed [#3882](https://github.com/vueComponent/ant-design-vue/issues/3882)
- π `Table` column supports v-for [#3934](https://github.com/vueComponent/ant-design-vue/issues/3934)
- π Fix the problem that `Table` displays horizontal scroll bar on windows [6d33d6](https://github.com/vueComponent/ant-design-vue/commit/6d33d60d2bca98825f274e48bcc3badd1857f742)
- π `Form` scrollToFirstError supports option parameter passing [#3918](https://github.com/vueComponent/ant-design-vue/issues/3918)
- π Fix the issue of `Calendar` month selector displaying wrong characters [#3915](https://github.com/vueComponent/ant-design-vue/issues/3915)
- π Refactor the `Switch` component and remove the defaultChecked attribute [#3885](https://github.com/vueComponent/ant-design-vue/issues/3885)
- π Fix the process exception when using Vite [#3930](https://github.com/vueComponent/ant-design-vue/issues/3930)
- π Fix `Radio` shadow occlusion problem [#3955](https://github.com/vueComponent/ant-design-vue/issues/3955)
- π Fix the issue that span does not take effect in `Form` inline mode [#3862](https://github.com/vueComponent/ant-design-vue/issues/3862)
- π Fix the issue that `Cascader` keydown selection does not take effect [#958](https://github.com/vueComponent/ant-design-vue/issues/958)
- π Fix `Image` preview function failure problem [#3701](https://github.com/vueComponent/ant-design-vue/issues/3701)
- π Fix some TS type issues

## 2.1.2

`2021-03-28`

- π Recompile with Vue 3.0.9, compatible with 3.0.7 and below

## 2.1.1

`2021-03-27`

- π Compatible with Vue 3.0.8, note: Due to the destructive update of 3.0.8, 2.1.1 is not compatible with versions below 3.0.7 [vue#3493](https://github.com/vuejs/vue-next/issues /3493)
- π Fix Modal.confirm missing closable ts type [#3684](https://github.com/vueComponent/ant-design-vue/issues/3845)
- π Fix upload custom method not working issue [#3843](https://github.com/vueComponent/ant-design-vue/issues/3843)

## 2.1.0

`2021-03-20`

- πππ Added `Typography` component [#3807](https://github.com/vueComponent/ant-design-vue/issues/3807)
- π Modal method adds close icon customization [#3753](https://github.com/vueComponent/ant-design-vue/issues/3753)
- π Fix missing build files containing internationalization [#3684](https://github.com/vueComponent/ant-design-vue/issues/3684)
- π Fix Drawer error after destruction [#848d64](https://github.com/vueComponent/ant-design-vue/commit/848d6497e68c87566790dfa889a1913199a6699a)
- π Fix BackTop incorrect position when KeepAlive is activated [#3803](https://github.com/vueComponent/ant-design-vue/issues/3803)
- π Fix the problem that the TreeNode class does not take effect [#3822](https://github.com/vueComponent/ant-design-vue/issues/3822)
- π Fix Table tags being an array error issue [#3812](https://github.com/vueComponent/ant-design-vue/issues/3812)
- π Fix the sorting issue when Table custom filterIcon is triggered [#3819](https://github.com/vueComponent/ant-design-vue/issues/3819)
- π Fix Select style misalignment under Form [#3781](https://github.com/vueComponent/ant-design-vue/issues/3781)

## 2.0.1

`2021-02-27`

- π `Badge` adds `Ribbon` [#3681](https://github.com/vueComponent/ant-design-vue/issues/3681)
- π Adjust the trigger order of `SearchInput` search event [#3725](https://github.com/vueComponent/ant-design-vue/issues/3725)
- π Fix the stuck problem when `Table` is destroyed [#3531](https://github.com/vueComponent/ant-design-vue/issues/3531)
- π Fix the issue of less file introduced in `Menu` css [#3678](https://github.com/vueComponent/ant-design-vue/issues/3678)
- π Fix the problem of `Alert` custom icon misalignment [#3712](https://github.com/vueComponent/ant-design-vue/issues/3712)

## 2.0.0

`2021-02-06`

- πππ 2.0 official version released
- πππ support dark theme [#3410](https://github.com/vueComponent/ant-design-vue/issues/3410)
- πππ The new version of the document is online, use the Composition API to completely reconstruct the document example, and provide the TS and JS dual version source code
- π Refactor the `Alert` component using Composition API [#3654](https://github.com/vueComponent/ant-design-vue/pull/3654)
- π `Tooltip` supports custom colors [#3603](https://github.com/vueComponent/ant-design-vue/issues/3603)
- π Fix the problem that `TimePicker` does not automatically scroll to the selected position [#ab7537](https://github.com/vueComponent/ant-design-vue/commit/ab75379f0c2f5e54ab7c348284a7391939ab5aaf)

## 2.0.0-rc.9

`2021-01-24`

- π `@ant-design/icons-vue` upgrade to 6.0, use es module by default
- π `Tabs` adds `centered` centered mode [#3501](https://github.com/vueComponent/ant-design-vue/issues/3501)
- π `Progress` Add opacity animation [#3505](https://github.com/vueComponent/ant-design-vue/issues/3505)
- π Fix an error when installing npm [#3515](https://github.com/vueComponent/ant-design-vue/issues/3515)
- π Fix the problem of `Breadcrumn` split line not displaying [#3522](https://github.com/vueComponent/ant-design-vue/issues/3522)
- π Fix `Radio` uncontrolled issue [#3517](https://github.com/vueComponent/ant-design-vue/issues/3517)
- π Fix `FormItem` not wrapping issue [#3538](https://github.com/vueComponent/ant-design-vue/issues/3538)
- π Fix `Carousel` `pauseOnDotsHover` not working problem [#3519](https://github.com/vueComponent/ant-design-vue/issues/3519)
- π Fix `Input.Search` `class` not working issue [#3541](https://github.com/vueComponent/ant-design-vue/issues/3541)
- π Fix the issue that `InputNumber` triggers the change event multiple times under Microsoft input method [#3550](https://github.com/vueComponent/ant-design-vue/issues/3550)
- π Fix the problem that the keyboard can still be switched in the disabled state of `Tabs` [#3575](https://github.com/vueComponent/ant-design-vue/issues/3575)
- π Fix the issue that `Switch` does not take effect in the table [#3512](https://github.com/vueComponent/ant-design-vue/issues/3512)

## 2.0.0-rc.8

`2021-01-07`

- π Support Vite 2 [#3490](https://github.com/vueComponent/ant-design-vue/issues/3490)
- π Use Composition API to refactor Affix component [#3447](https://github.com/vueComponent/ant-design-vue/issues/3447)
- π Fix Image component type definition error [#3488](https://github.com/vueComponent/ant-design-vue/issues/3488)
- π Upgrade icons-vue Fix IconFont component type error [#3474](https://github.com/vueComponent/ant-design-vue/issues/3474)
- π Fix Tooltip arrow style error in less 4 [#3477](https://github.com/vueComponent/ant-design-vue/issues/3477)
- π Fix DatePicker type definition parsing error under Vue 3.0.5 [#bf7c62](https://github.com/vueComponent/ant-design-vue/commit/bf7c62f457fc14624881f69c5baf9a62219383f7)

## 2.0.0-rc.7

`2020-12-28`

- π Fix Switch `change`γ`click` not work [#3453](https://github.com/vueComponent/ant-design-vue/issues/3453)

## 2.0.0-rc.6

`2020-12-27`

- π Support Less 4 [#3449](https://github.com/vueComponent/ant-design-vue/issues/3449)
- π Added Image component [#3235](https://github.com/vueComponent/ant-design-vue/issues/3235)
- π Functional component, add displayName attribute [#3445](https://github.com/vueComponent/ant-design-vue/issues/3445)
- π Message adds custom class style function [#3443](https://github.com/vueComponent/ant-design-vue/issues/3443)
- π Fix the initial disabled state of the Tabs component does not take effect [#3366](https://github.com/vueComponent/ant-design-vue/issues/3366)
- π Fix Slider accuracy issue [#3346](https://github.com/vueComponent/ant-design-vue/issues/3346)
- π Fix the incorrect scroll height of Select [#3419](https://github.com/vueComponent/ant-design-vue/issues/3419)
- π Fix the problem that Input small is too small and the height is 2px [#3396](https://github.com/vueComponent/ant-design-vue/issues/3396)
- π Fix the problem that TreeSelect triggers two change events
- π Fix the endless loop problem of TreeSelect defining title through slot
- π Fix the problem that Drawer handle slot triggers two click events
- π Added Checkbox and Switch event declaration

## 2.0.0-rc.5

`2020-12-13`

- π Fix the undefined warning problem of this.dom output in the Drawer component console
- π Fix Menu in Vue 3.0.3 and above versions, display confusion problem [#3354](https://github.com/vueComponent/ant-design-vue/issues/3354)

## 2.0.0-rc.4

`2020-12-10`

- π Input.Password supports custom icons [#3320](https://github.com/vueComponent/ant-design-vue/issues/3320)
- π Fix the issue that the Select Option click event does not trigger [#4ea00d](https://github.com/vueComponent/ant-design-vue/commit/4ea00d3a70d0afd7bea07f814df03ab7d0b25ebd)
- π Fix the problem that the dark theme does not work after the Menu exceeds the width [#10f35a](https://github.com/vueComponent/ant-design-vue/commit/10f35a1fa510de91e9484b07fcfff253920cee29)
- π Fix Menu console vue key some waring [#520d6a](https://github.com/vueComponent/ant-design-vue/commit/520d6a5e85eb391e5294211c9d7b2ea598c59119)
- π Remove console passive prompt log [#8d1669](https://github.com/vueComponent/ant-design-vue/commit/8d1669b8896d84a67c61d3a00d0b13c42d70f30f)

## 2.0.0-rc.3

`2020-12-05`

- π Fix the problem of functional components reporting type errors in Vue 3.0.3 [#f5cf7e](https://github.com/vueComponent/ant-design-vue/commit/f5cf7e0920a51f0ac024046996c99260aa41becf)
- π Fix Menu display error after detecting width [#3262](https://github.com/vueComponent/ant-design-vue/issues/3262)
- π Fix Menu subMenuOpenDelay subMenuCloseDelay not working problem [#3291](https://github.com/vueComponent/ant-design-vue/pull/3291)
- π Fix TreeSelect stack overflow problem [#28aeea](https://github.com/vueComponent/ant-design-vue/commit/28aeea6f0b142ed68950a3738f7cf2c1581a7a5b)
- π Fix Input custom style class being overwritten [#3273](https://github.com/vueComponent/ant-design-vue/issues/3273)
- π Fix InputNumber parse error in production environment [#3249](https://github.com/vueComponent/ant-design-vue/issues/3249)

## 2.0.0-rc.2

`2020-11-24`

- π Optimize Menu performance, enable lazy loading by default [#3243](https://github.com/vueComponent/ant-design-vue/pull/3243)
- π Tag supports defining icon via slot [#3185](https://github.com/vueComponent/ant-design-vue/pull/3185)
- π Small type table changed to borderless [#3221](https://github.com/vueComponent/ant-design-vue/issues/3221)
- π @ant-design/icons-vue upgraded to 5.1.6, support SSR, support spin attribute shorthand
- π Fix the style problem of Alert's close button in Safari [#3184](https://github.com/vueComponent/ant-design-vue/issues/3184)
- π Fix the problem of Notification top attribute type error [#3187](https://github.com/vueComponent/ant-design-vue/issues/3187)
- π Fix DirectoryTree custom icon does not take effect [#3183](https://github.com/vueComponent/ant-design-vue/issues/3183)
- π Fix Button loading delay not taking effect [#3194](https://github.com/vueComponent/ant-design-vue/issues/3194)
- π Select optionFilterProp no longer supports filtering by children [#3204](https://github.com/vueComponent/ant-design-vue/issues/3204)
- π Fix Select labelInValue error when reporting [#3216](https://github.com/vueComponent/ant-design-vue/issues/3216)
- π Fix ConfigProvider transformCellText missing issue [#3206](https://github.com/vueComponent/ant-design-vue/issues/3206)
- π Fix the style disorder problem when Dropdown Button is mixed together [#3244](https://github.com/vueComponent/ant-design-vue/issues/3244)
- π Fix RangePicker custom width invalidation issue [#3244](https://github.com/vueComponent/ant-design-vue/issues/3245)
- π Fix multiple errors or missing Ts types

## 2.0.0-rc.1

`2020-11-14`

- πππ
- π Menu cancel the default lazy loading, improve the first animation effect, optimize the Bezier curve function, and make it smoother [#3177](https://github.com/vueComponent/ant-design-vue/pull/3177)
- π Fix Select search function failure problem [#3144](https://github.com/vueComponent/ant-design-vue/issues/3144)
- π Fix the Drawer component does not have automatic focus, which can not be closed directly by the ESC button [#3148](https://github.com/vueComponent/ant-design-vue/issues/3148)
- π Fix the incorrect position of popover elements in Popover [#3147](https://github.com/vueComponent/ant-design-vue/issues/3147)
- π Fix CountDown not updating problem [#3170](https://github.com/vueComponent/ant-design-vue/pull/3170)
- π Fix multiple errors or missing Ts types

## 2.0.0-beta.15

`2020-11-08`

- π Optimize the Menu animation to make it smoother [#3095](https://github.com/vueComponent/ant-design-vue/issues/3095)
- π Optimize VirtualList to avoid invalid render [#2e61e9](https://github.com/vueComponent/ant-design-vue/commit/2e61e9cb502f2bb6910f59abfb483fd2517e594f)
- π Fix Menu overflowedIndicator not taking effect [#689113](https://github.com/vueComponent/ant-design-vue/commit/689113b3c9c19e929607567a4c8252c6511bff5c)
- π Select
  - Fix the issue that dropdownRender does not support slot [#3098](https://github.com/vueComponent/ant-design-vue/issues/3098)
  - Fix the issue of abnormal empty values ββin tag mode [#3100](https://github.com/vueComponent/ant-design-vue/issues/3100)
  - Fix the problem that the selected item is not updated in single selection mode [#3099](https://github.com/vueComponent/ant-design-vue/issues/3099)
  - Fix foucs status not taking effect in special scenarios [#3099](https://github.com/vueComponent/ant-design-vue/issues/3099)
- π Fix DatePicker default formatting invalid problem [#3091](https://github.com/vueComponent/ant-design-vue/issues/3091)
- π Fix Table customRow configuration event not taking effect [#3121](https://github.com/vueComponent/ant-design-vue/issues/3121)
- π Fix the style of TreeSelect search box [ee4cd3c](https://github.com/vueComponent/ant-design-vue/commit/ ee4cd3c35a84658cbbb148ce368bc247a927d528)
- π Fix Ts type error or missing problem

## 2.0.0-beta.13

`2020-11-02`

- π Fix npm install error report [#3080](https://github.com/vueComponent/ant-design-vue/issues/3080)
- π Fix Select maxPlaceHolder display error problem [#3085](https://github.com/vueComponent/ant-design-vue/issues/3085)
- π Fix the pop-up component, the pop-up position is not updated [#3085](https://github.com/vueComponent/ant-design-vue/issues/3085)
- π Fix the warning problem when Table data is empty [#3082](https://github.com/vueComponent/ant-design-vue/issues/3082)
- π Fix Input display multiple borders in Form [#3084](https://github.com/vueComponent/ant-design-vue/issues/3084)

## 2.0.0-beta.12

`2020-11-01`

- π Fix dist/antd.css missing component style issue [#3069](https://github.com/vueComponent/ant-design-vue/issues/3069)
- π Fix Input style issue [#3074](https://github.com/vueComponent/ant-design-vue/issues/3074)
- π Fix Form layout="vertical" style issue [#3075](https://github.com/vueComponent/ant-design-vue/issues/3075)
- π Fix Select cannot open popup problem [#3070](https://github.com/vueComponent/ant-design-vue/issues/3070)

## 2.0.0-beta.11

`2020-10-30`

- πππ Refactored Select and AutoComplete components, supports virtual lists, and greatly improves performance
- π₯π₯π₯ Use Typescript to refactor all components, type support is more friendly
- π₯ Optimize the underlying animation components, with better performance and smoother
- π Textarea component added showCount to support word count function
- π Recursive Menu component, supports arbitrary nesting of other elements [#1452](https://github.com/vueComponent/ant-design-vue/issues/1452)
- π?πͺ Add Irish language internationalization support
- π Fix webpack 5 compatibility issues.
- π Fix the problem that the Upload method attribute does not take effect [#2837](https://github.com/vueComponent/ant-design-vue/issues/2837)
- π Fix Table component filter not supporting number type problem [#3052](https://github.com/vueComponent/ant-design-vue/issues/3052)
- π Fix Table fixed column ellipsis not working issue [#2916](https://github.com/vueComponent/ant-design-vue/issues/2916)
- π Fix Table custom expandIcon not taking effect [#3013](https://github.com/vueComponent/ant-design-vue/issues/3013)
- π Fix the problem that TreeSelect cannot customize slot [#2827](https://github.com/vueComponent/ant-design-vue/issues/2827)
- π Change Avatar's srcSet to srcset

## 2.0.0-beta.10

`2020-09-24`

- π Update Vue dependency to release version
- π Fix the problem that Menu does not collapse in Layout [#2819](https://github.com/vueComponent/ant-design-vue/issues/2819)
- π Fix a warning issue when switching Tabs [#2865](https://github.com/vueComponent/ant-design-vue/issues/2865)
- π Fix the problem that the input box does not trigger the change event when compositionend
- π Fix the problem that the Upload button does not disappear [#2884](https://github.com/vueComponent/ant-design-vue/issues/2884)
- π Fix upload custom method not working issue [#2837](https://github.com/vueComponent/ant-design-vue/issues/2837)
- π Fix some ts type errors

## 2.0.0-beta.8

- π Fix ts types error

## 2.0.0-beta.7

- π Fix the problem that Descriptions Item does not support v-for [#2793](https://github.com/vueComponent/ant-design-vue/issues/2793)
- π Fix Modal button loading effect not working problem [9257c1](https://github.com/vueComponent/ant-design-vue/commit/9257c1ea685db4339239589153aee3189d0434fe)
- π Fix the problem that the Steps component cannot be clicked when using v-model [ec7309](https://github.com/vueComponent/ant-design-vue/commit/ec73097d9b6ea8e2f2942ac28853c19191ca3298)
- π Checkbox, Radio add event declaration
- π Fix ts type error [802446](https://github.com/vueComponent/ant-design-vue/commit/8024469b8832cfc4fe85498b639bfb48820531aa)

## 2.0.0-beta.6

- π Fix the problem that TreeSelectNode subcomponent TreeSelectNode is not registered

## 2.0.0-beta.5

- π₯ Support Vite.

## 2.0.0-beta.4

- π Remove polyfills that are no longer used
- π Fix the problem of calling `Modal` afterClose twice
- π Supplement the declaration that ts type files lack native attributes

## 2.0.0-beta.3

- π₯ Support Typescript.
- π₯ Added `Space` component.
- π Fix the problem that some components cannot use css scope [4bdb24](https://github.com/vueComponent/ant-design-vue/commit/4bdb241aa674b50fafa29b3b98e291643f2a06cc).
- π Fix `List.Meta` registration failure problem [03a42a](https://github.com/vueComponent/ant-design-vue/commit/03a42a5b35e7d42a39aedb1aba8346995be2c27e)
- π Fix the problem of misalignment in the fixed column of Table [#1493](https://github.com/vueComponent/ant-design-vue/issues/1493)
- π Fix the problem that the `Button` is not vertically centered [bd71e3](https://github.com/vueComponent/ant-design-vue/commit/bd71e3806b73881f9a95028982d17a10b2cd0b5c)
- π Fix `Tabs` multiple departure `change` event issue [8ed937](https://github.com/vueComponent/ant-design-vue/commit/8ed937344a57142a575e5272f50933c9c4459a43)

## 2.0.0-beta.2

### Design specification adjustment

- Adjust the row height from `1.5`(`21px`) to `1.5715`(`22px`).
- Basic round corner adjustment, changed from `4px` to `2px`.
- The color brightness of the dividing line is reduced, from `#E8E8E8` to `#F0F0F0`.
- The default background color of Table is changed from transparent to white.

### Compatibility adjustment

- The minimum supported version of Vue is Vue 3.0.

#### Adjusted API

- Removed LocaleProvider, please use `ConfigProvider` instead.
- Removed the afterClose property of Tag.
- Merged FormModel and Form, see the Form refactoring part below for details.
- `tabIndex`, `maxLength`, `readOnly`, `autoComplete`, `autoFocus` are changed to all lowercase.
- In order to use the slot more friendly in template syntax, all related to xxxRender, renderXxxx are changed to single parameter, involving `itemRender`, `renderItem`, `customRender`, `dropdownRender`, `dateCellRender`, `dateFullCellRender`, `monthCellRender`, `monthFullCellRender`, `renderTabBar`.
- All the places where scopedSlots are configured are changed to slots.
- `{ on, props, attrs, ... }` configuration is flattened, such as `{ props: {type:'xxx'}, on: {click: this.handleClick}}` changed to `{ type: 'xxx', onClick: this.handleClick }`, related fields: `okButtonProps`, `cancelButtonProps`.
- Change xxx.sync to v-model:xxx
- v-model is changed to v-model:xxx, which specifically involves components:

  - The components changed from v-model to v-model:checked are: CheckableTag, Checkbox, Switch
  - The components changed from v-model to v-model:value are: Radio, Mentions, CheckboxGroup, Rate, DatePicker
  - The components changed from v-model to v-model:visible are: Tag, Popconfirm, Popove, Tooltip, Moda, Dropdown
  - The components changed from v-model to v-model:activeKey are: Collaps, Tabs
  - The components changed from v-model to v-model:current are: Steps
  - The components changed from v-model to v-model:selectedKeys are: Menu

#### Icon Upgrade

In `ant-design-vue@1.2.0`, we introduced the svg icon ([Why use the svg icon?](https://github.com/ant-design/ant-design/issues/10353)). The icon API that uses string naming cannot be loaded on demand, so the svg icon file is fully introduced, which greatly increases the size of the packaged product. In 2.0, we adjusted the icon usage API to support tree shaking, reducing the default package size by approximately 150 KB (Gzipped).

The old way of using Icon will be obsolete:

```html
<a-icon type="smile" />
<a-button icon="smile" />
```

In 2.0, an on-demand introduction method will be adopted:

```html
<template>
  <smile-outlined />
  <a-button>
    <template v-slot:icon><smile-outlined /></template>
  </a-buttom>
</template>
<script>
import SmileOutlined from'@ant-design/icons-vue/SmileOutlined';
export default {
  components: {
    SmileOutlined
  }
}
</script>
```

#### Component refactoring

In 1.x, we provide two form components, Form and FormModel. The original Form component uses v-decorator for data binding. In Vue2, we use context to force update components. However, in Vue3, due to the introduction of patchFlag, etc. Optimization method, forced refresh will destroy the performance advantage brought by patchFlag. So in version 2.0, we merged Form and FormModel, retained the use of FormModel, enriched related functions, and renamed it to Form.

Involving changes:

- Added `scrollToFirstError`, `name`, `validateTrigger` properties for Form, added `finish`, `finishFailed` events, and added `scrollToField` method.
- Form.Item adds `validateFirst`, `validateTrigger`, and discards the `prop` attribute, and replaces it with `name`.
- The nested field path uses an array. In the past version, we used. To represent the nested path (such as user.name to represent {user: {name:''} }). However, in some back-end systems, the variable name will also carry .. This causes users to need additional codes for conversion. Therefore, in the new version, nested paths are represented by arrays to avoid wrong handling behaviors (such as ['user','name']).
- validateFields no longer supports callback. validateFields will return a Promise object, so you can perform corresponding error handling through async/await or then/catch. It is no longer necessary to determine whether errors is empty:

```js
// v1
// eslint-disable-next-line no-undef,no-unused-vars
validateFields((err, value) => {
  if (!err) {
    // Do something with value
  }
});
```

Change to

```js
// v2
// eslint-disable-next-line no-undef,no-unused-vars
validateFields().then(values ββ=> {
  // Do something with value
});
```

## 1.x

Visit [GitHub](https://github.com/vueComponent/ant-design-vue/blob/1.x/CHANGELOG.en-US.md) to read change logs from `0.x` to `1.x`.
