export default {
  title: 'DCTComponents/Card/CardHeader',
  parameters: {
    actions: {},
  },
};

const Template = (args) => {

  return `
    <dct-card-header disabled=${args.disabled} overlay=${args.overlay}>
      ${args.startIcon
        ? `<span slot="start" class="material-symbols-outlined">${args.startIcon}</span>`
        : ''
      }
      ${args.title ? `<div>${args.title}</div>` : ''}
      ${args.subHeading ? `<div slot="sub-heading">${args.subHeading}</div>` : ''}
      ${args.endIcon
          ? `<span slot="end" class="material-symbols-outlined">${args.endIcon}</span>`
          : ''
      }
    </dct-card-header>`;
};

export const CardHeader = Template.bind({});
CardHeader.args = {
  disabled: false,
  overlay: false,
  title: `Card title`,
  subHeading: `Card sub heading<span>`,
  startIcon: undefined,
  endIcon: 'more_vert',
};
