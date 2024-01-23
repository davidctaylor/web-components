import { action } from '@storybook/addon-actions';

export default {
  title: 'DCTComponents/Accordian',
  parameters: {
    actions: {},
  },
};

const handleEvent = (e) => {
  action('accordianChange')(e.detail);
};

window.addEventListener('accordianChange', handleEvent);

const Template = (args) => {
  const heading = `
    <dct-item-heading slot="heading" animate-icons=${args.animateicons} >
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
  return `
  <dct-accordian disabled=${args.disabled}>
    ${heading}
    <dct-item>${args.accordianContent}</dct-item>
  </<dct-accordian>`;
};

export const Accordian = Template.bind({});
Accordian.args = {
  accordianContent: '<span>Accordian content</span>',
  animateIcons: true,
  disabled: false,
  heading: 'Accordian heading',
  subHeading: 'Optional supporting text',
  startIcon: 'expand_more',
  endIcon: 'expand_more',
};
