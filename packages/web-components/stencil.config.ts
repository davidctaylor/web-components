import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

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
    reactOutputTarget({
      componentCorePackage: '@dctjs/web-components',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [sass()],
  validatePrimaryPackageOutputTarget: true,
};
