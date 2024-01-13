export default {
  title: 'DCTComponents/Button',
  parameters: {
    actions: {},
  },
  argTypes: {
    border: {
      options: ['elevated', 'outlined', 'none'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => {
  return `
    <dct-button disabled=${args.disabled} border=${args.border} ripple=${args.addRipple}>
      <span>${args.text}</span>
    </dct-button>`;
};

const TemplateIcon = (args) => {
  return `
    <dct-button disabled=${args.disabled} border=${args.border} ripple=${args.addRipple} button-style=icon>
      <span class="material-symbols-outlined">person</span>
    </dct-button>`;
};

export const Button = Template.bind({});
Button.args = {
  disabled: false,
  border: 'elevated',
  text: 'press me',
};

export const ButtonIcon = TemplateIcon.bind({});
ButtonIcon.args = {
  disabled: false,
  border: 'elevated',
  addRipple: true,
};
