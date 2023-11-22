export default {
  title: 'DCTComponents/Item',
  parameters: {
    actions: {},
  },
};

const Template = (args) => {
  return `
    <dct-item disabled=${args.disabled} type=${args.type} href=${args.href} target=${args.target}>${args.itemContent}</dct-item>
    `;
};

export const Item = Template.bind({});
Item.args = {
  itemContent: '<span>Item content</span>',
  disabled: false,
  href: 'https://www.google.com/',
  // separator: 'Optional supporting text',
  target: '_black',
  type: 'text',
};
