export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Event = {
  __typename?: 'Event';
  date: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  popularEvents: Array<Event>;
};


export type QueryeventArgs = {
  id: Scalars['Int'];
};


export type QuerypopularEventsArgs = {
  first: Scalars['Int'];
};

export type getEventQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type getEventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: number, name: string, date: string, location?: string | null, imageUrl: string, description?: string | null } | null };

export type getPopularEventsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type getPopularEventsQuery = { __typename?: 'Query', popularEvents: Array<{ __typename?: 'Event', id: number, name: string, date: string, location?: string | null, imageUrl: string, description?: string | null }> };
