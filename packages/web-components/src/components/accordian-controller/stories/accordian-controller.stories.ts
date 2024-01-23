import { action } from '@storybook/addon-actions';

export default {
  title: 'DCTComponents/AccordianController',
  parameters: {
    actions: {},
  },
};

const handleEvent = (e) => {
  action('accordianControllerChange')(e.detail);
};

window.addEventListener('accordianControllerChange', handleEvent);

const Template = (args) => {
  const accordian = (title) => `
    <dct-accordian divider=${args.accordianDivider}>
      <dct-item-heading slot="heading" animate-icons="true">
        <div slot="heading">${title} Accordian Heading</div>
        <span slot="end" class="material-symbols-outlined">expand_more</span>
      </dct-item-heading>
      <dct-item><div>${title} according content</div></dct-item>
    </dct-accordian>`;

  return `
    <dct-accordian-controller disabled=${args.disabled} display-multiple=${
    args.displayMultiple
  }>
      ${accordian('First')}
      ${accordian('Second')}
      ${accordian('Third')}
    </dct-accordian-controller>`;
};

export const AccordianController = Template.bind({});
AccordianController.args = {
  disabled: false,
  displayMultiple: true,
  accordianDivider: 'full',
};
