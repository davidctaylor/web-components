export default {
  title: 'DCTComponents/Card/CardContent',
  parameters: {
    actions: {},
  },
};

const Template = (args) => {
  return `
    <dct-card-content disabled=${args.disabled}>
      ${args.content}
    </dct-card-content>`;
};

export const CardContent = Template.bind({});
CardContent.args = {
  disabled: false,
  content: '<span>Card content</span>'
};
