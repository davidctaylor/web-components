// import { action } from '@storybook/addon-actions';

export default {
  // component: Accordian,
  title: 'DCTComponents/ItemHeading',
  parameters: {
    actions: {},
  },
};

// const handleEvent = (e) => {
//   action('accordianChange')(e.detail);
// };

// window.addEventListener('accordianChange', handleEvent);

const Template = (args) => {
  const heading = `
  <dct-item-heading disabled=${args.disabled}>
  ${
    args.startIcon
      ? `<span slot="start" class="material-symbols-outlined">${args.startIcon}</span>`
      : ''
  }
  ${args.heading ? `<div slot="heading">${args.heading}</div>` : ''}
  ${args.subHeading ? `<div slot="sub-heading">${args.subHeading}</div>` : ''}
  ${
    args.endIcon
      ? `<span slot="end" class="material-symbols-outlined">${args.endIcon}</span>`
      : ''
  }
  </dct-item-heading>  
`;
  return heading;
};

export const ItemHeading = Template.bind({});
ItemHeading.args = {
  heading: 'Accordian heading',
  subHeading: 'Optional supporting text',
  startIcon: 'expand_more',
  endIcon: 'expand_more',
  disabled: false,
};
