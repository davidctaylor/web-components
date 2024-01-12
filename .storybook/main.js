/** @type { import('@storybook/html-webpack5').StorybookConfig } */

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)' ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials', 
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../dist', '../images']
};
export default config;
