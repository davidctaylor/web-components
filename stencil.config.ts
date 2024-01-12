import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'dct-components',
  outputTargets: [
    {
      type: 'dist',
      isPrimaryPackageOutputTarget: true,
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: '../images', dest: 'assets' }],
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [sass()],
  validatePrimaryPackageOutputTarget: true,
};
