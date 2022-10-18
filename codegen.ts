import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './graphql/schema.ts',
  config: {
    namingConvention: {
      typeNames: './graphql/namingConvention',
    },
  },
  documents: ['graphql/**/*.graphql'],
  generates: {
    './graphql/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    './graphql/': {
      preset: 'near-operation-file',
      plugins: ['typescript-operations', 'typed-document-node'],
      presetConfig: {
        baseTypesPath: 'types.ts',
        extension: '.ts',
      },
    },
  },
}
export default config
