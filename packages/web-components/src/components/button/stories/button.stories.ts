import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'DCTComponents/Button',
  // parameters: {
  //   actions: { argTypesRegex: 'd*' },
  // },
  argTypes: {
    buttonStyle: {
      options: ['elevated', 'filled', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    buttonType: {
      options: ['button', 'reset', 'submit'],
      control: { type: 'radio' },
    },
    buttonColor: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  decorators: [withActions],
};

const Template = (args) => {
  return `
    <div style="display: flex; justify-content: center; align-items: center;">
      <dct-button disabled=${args.disabled} button-style=${args.buttonStyle}
        ripple=${args.addRipple} button-color=${args.buttonColor}>
        ${
          args.iconStart
            ? `<span slot="start" class="button-icon material-symbols-outlined">more_vert</span>`
            : ``
        }
        <span>${args.text}</span>
        ${
          args.iconEnd
            ? `<span slot="end" class="button-icon material-symbols-outlined">more_vert</span>`
            : ``
        }
      </dct-button>
    </div>`;
};

const TemplateIcon = (args) => {
  return `
    <div style="display: flex; justify-content: center; align-items: center;">
      <dct-button disabled=${args.disabled} button-style=${args.buttonStyle} button-type=${args.buttonType}
        ripple=${args.addRipple} button-color=${args.buttonColor} icon-button=true >
        <span class="material-symbols-outlined">person</span>
      </dct-button>
    </div>`;
};

export const Button = Template.bind({});
Button.args = {
  addRipple: true,
  buttonStyle: 'outlined',
  buttonType: 'button',
  buttonColor: 'primary',
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
  buttonColor: 'primary',
  disabled: false,
};
