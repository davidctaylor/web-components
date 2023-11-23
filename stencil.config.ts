import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'DCT-components',
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
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [sass()],
  validatePrimaryPackageOutputTarget: true,
};
