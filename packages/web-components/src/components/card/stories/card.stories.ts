export default {
  title: 'DCTComponents/Card',
  parameters: {
    actions: {},
  },
};

const Template = (args) => {
  return `
    <dct-card disabled=${args.disabled} border=${args.border} href="${args.href}">
      ${args.addRipple ? `<dct-ripple></dct-ripple>` : ``}
      <dct-card-header>
        <span>Card Title</span>
        <span slot="sub-heading">Card sub title</span>
      </dct-card-header>
      <dct-card-content><div>Text description for the card's content</div></dct-card-content>
    </dct-card>`;
};

const TemplateWithMedia = (args) => {
  return `
    <div style="height:300px; width:500px">
      <dct-card disabled=${args.disabled} border=${args.border} href="${args.href}">
        ${args.addRipple ? `<dct-ripple></dct-ripple>` : ``}
        ${args.mediaAbove ? '<img src="mountain-road.webp"/>' : ''}
        <dct-card-title overlay=${args.titleOverlay}>
          <span>Card Title</span>
          <span slot="sub-title">Card sub title</span>
        </dct-card-title>
        <dct-card-content><div>Text description for the card's content</div></dct-card-content>
        ${!args.mediaAbove ? '<img src="mountain-road.webp"/>' : ''}
      </dct-card>
    </div>`;
};

export const Card = Template.bind({});
Card.args = {
  disabled: false,
  border: 'elevated',
  href: 'https://google.com',
  addRipple: true,
};


export const CardWithMedia = TemplateWithMedia.bind({});
CardWithMedia.args = {
  disabled: false,
  border: 'elevated',
  titleOverlay: false,
  mediaAbove: true,
  href: 'https://google.com',
  addRipple: true,
};
