import * as Types from '../../types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type getPopularEventsQueryVariables = Types.Exact<{
  first: Types.Scalars['Int'];
}>;


export type getPopularEventsQuery = { __typename?: 'Query', popularEvents: Array<{ __typename?: 'Event', id: number, name: string, date: string, location?: string | null, imageUrl: string, description?: string | null }> };


export const GET_POPULAR_EVENTS = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPopularEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"popularEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<getPopularEventsQuery, getPopularEventsQueryVariables>;