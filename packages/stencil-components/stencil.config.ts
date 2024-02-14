import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const componentCorePackage = '@dctjs/web-components';
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  autoprefixCss: true,
  enableCache: true,
  namespace: 'dct-components',
  outputTargets: [
    {
      type: 'dist',
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
    angularOutputTarget({
      componentCorePackage,
      directivesProxyFile: '../angular-workspace/projects/components-library/src/lib/stencil-generated/proxies.ts',
      directivesArrayFile: '../angular-workspace/projects/components-library/src/lib/stencil-generated/index.ts',
      outputType: 'component',
      valueAccessorConfigs: angularValueAccessorBindings
    }),
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [sass()],
  preamble: 'DCT Web Components - MIT License',
  sourceMap: true,
  transformAliasedImportPaths: true,
};
