export default {
  title: 'DCTComponents/Card/CardTitle',
  parameters: {
    actions: {},
  },
};

const Template = (args) => {

  return `
    <dct-card-title disabled=${args.disabled} overlay=${args.overlay}>
      ${args.startIcon
        ? `<span slot="start" class="material-symbols-outlined">${args.startIcon}</span>`
        : ''
      }
      ${args.title ? `<div>${args.title}</div>` : ''}
      ${args.subTitle ? `<div slot="sub-title">${args.subTitle}</div>` : ''}
      ${args.endIcon
          ? `<span slot="end" class="material-symbols-outlined">${args.endIcon}</span>`
          : ''
      }
    </dct-card-title>`;
};

export const CardTitle = Template.bind({});
CardTitle.args = {
  disabled: false,
  overlay: false,
  title: `Card title`,
  subTitle: `Card sub title`,
  startIcon: undefined,
  endIcon: 'more_vert',
};
