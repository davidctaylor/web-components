export default {
  title: 'DCTComponents/Card',
  parameters: {
    actions: {},
  },
};

const Template = (args) => {
  const item = (title) => `
    <dct-item separator=${args.itemSeparator}><div>${title} according content</div></dct-item>`;

  return `
    <dct-list disabled=${args.disabled} heading="${args.heading}"">
      ${item('First')}
      ${item('Second')}
      ${item('Third')}
    </dct-list>`;
};

export const List = Template.bind({});
List.args = {
  disabled: false,
  itemSeparator: 'full',
  heading: 'List Heading',
};
