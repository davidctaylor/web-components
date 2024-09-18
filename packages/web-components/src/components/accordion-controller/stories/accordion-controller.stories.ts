import { action } from '@storybook/addon-actions';

export default {
  title: 'DCTComponents/AccordionController',
  parameters: {
    actions: {},
  },
};

const handleEvent = (e) => {
  action('accordionControllerChange')(e.detail);
};

window.addEventListener('accordionControllerChange', handleEvent);

const Template = (args) => {
  const accordion = (title) => `
    <dct-accordion divider=${args.accordionDivider}>
      <dct-item-heading slot="heading" animate-icons="true">
        <div slot="heading">${title} Accordion Heading</div>
        <span slot="end" class="material-symbols-outlined">expand_more</span>
      </dct-item-heading>
      <dct-item><div>${title} according content</div></dct-item>
    </dct-accordion>`;

  return `
    <dct-accordion-controller disabled=${args.disabled} display-multiple=${
    args.displayMultiple
  }>
      ${accordion('First')}
      ${accordion('Second')}
      ${accordion('Third')}
    </dct-accordion-controller>`;
};

export const AccordionController = Template.bind({});
AccordionController.args = {
  disabled: false,
  displayMultiple: true,
  accordionDivider: 'full',
};
