import { mount } from '@vue/test-utils';
import { sleep } from '../utils';

export default function focusTest(Component) {
  describe('focus and blur', () => {
    let container;
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
    });

    it('focus() and onFocus', async () => {
      const handleFocus = jest.fn();
      const wrapper = mount(
        {
          render() {
            return <Component ref="component" onFocus={handleFocus} />;
          },
        },
        { attachTo: container, sync: false },
      );
      await sleep();
      wrapper.vm.$refs.component.focus();
      await sleep();
      expect(handleFocus).toBeCalled();
    });

    fit('blur() and onBlur', async () => {
      const handleBlur = jest.fn();
      const handleFocus = jest.fn();
      const wrapper = mount(
        {
          render() {
            return <Component ref="component" onFocus={handleFocus} onBlur={handleBlur} />;
          },
        },
        { attachTo: container, sync: false },
      );
      wrapper.vm.$refs.component.focus();
      wrapper.vm.$refs.component.blur();
      await sleep(3000);
      expect(handleBlur).toBeCalled();
    });

    it('autofocus', async () => {
      const handleFocus = jest.fn();
      mount(
        {
          render() {
            return <Component autofocus onFocus={handleFocus} />;
          },
        },
        { attachTo: container, sync: false },
      );
      await sleep();
      expect(handleFocus).toBeCalled();
    });
  });
}
