export default {
  title: 'DCTComponents/Button',
  parameters: {
    actions: {},
  },
  argTypes: {
    buttonStyle: {
      options: ['elevated', 'filled', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    buttonType: {
      options: ['button', 'reset', 'submit'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => {
  return `
  <div style="display: flex; justify-content: center; align-items: center;">
    <dct-button disabled=${args.disabled} button-style=${args.buttonStyle} button-style=${args.buttontyle} 
      ripple=${args.addRipple} color=${args.color}>
      ${args.iconStart ? `<span slot="start" class="button-icon material-symbols-outlined">more_vert</span>` : ``}
      <span>${args.text}</span>
      ${args.iconEnd ? `<span slot="end" class="button-icon material-symbols-outlined">more_vert</span>` : ``}
    </dct-button></div>`;
};

const TemplateIcon = (args) => {
  return `
    <dct-button disabled=${args.disabled}button-style=${args.buttonStyle} button-type=${args.buttonType}
      ripple=${args.addRipple} color=${args.color} icon-button=true >
      <span class="material-symbols-outlined">person</span>
    </dct-button>`;
};

export const Button = Template.bind({});
Button.args = {
  addRipple: true,
  buttonStyle: 'outlined',
  buttonType: 'button',
  color: 'primary',
  disabled: false,
  text: 'press me',
  iconStart: true,
  iconEnd: false,
};

export const ButtonIcon = TemplateIcon.bind({});
ButtonIcon.args = {
  addRipple: true,
  buttonStyle: 'outline',
  buttonType: 'button',
  color: 'primary',
  disabled: false,
};
