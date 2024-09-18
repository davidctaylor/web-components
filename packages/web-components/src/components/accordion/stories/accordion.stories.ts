import { action } from '@storybook/addon-actions';

export default {
  title: 'DCTComponents/Accordion',
  parameters: {
    actions: {},
  },
};

const handleEvent = (e) => {
  action('accordionChange')(e.detail);
};

window.addEventListener('accordionChange', handleEvent);

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
  <dct-accordion disabled=${args.disabled}>
    ${heading}
    <dct-item>${args.accordionContent}</dct-item>
  </<dct-accordion>`;
};

export const Accordion = Template.bind({});
Accordion.args = {
  accordionContent: '<span>Accordion content</span>',
  animateIcons: true,
  disabled: false,
  heading: 'Accordion heading',
  subHeading: 'Optional supporting text',
  startIcon: 'expand_more',
  endIcon: 'expand_more',
};
