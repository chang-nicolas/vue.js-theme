import padEnd from 'lodash/padEnd';
import { createVNode } from 'vue';

const Number = (_, { attrs }) => {
  const { value, formatter, precision, decimalSeparator, groupSeparator = '', prefixCls } = attrs;
  let valueNode;

  if (typeof formatter === 'function') {
    // Customize formatter
    valueNode = formatter({ value, h: createVNode });
  } else {
    // Internal formatter
    const val = String(value);
    const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
    // Process if illegal number
    if (!cells) {
      valueNode = val;
    } else {
      const negative = cells[1];
      let int = cells[2] || '0';
      let decimal = cells[4] || '';

      int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
      if (typeof precision === 'number') {
        decimal = padEnd(decimal, precision, '0').slice(0, precision);
      }

      if (decimal) {
        decimal = `${decimalSeparator}${decimal}`;
      }

      valueNode = [
        <span key="int" class={`${prefixCls}-content-value-int`}>
          {negative}
          {int}
        </span>,
        decimal && (
          <span key="decimal" class={`${prefixCls}-content-value-decimal`}>
            {decimal}
          </span>
        ),
      ];
    }
  }

  return <span class={`${prefixCls}-content-value`}>{valueNode}</span>;
};

Number.name = 'AStatisticNumber';
export default Number;
