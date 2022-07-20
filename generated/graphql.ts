import { useQuery, UseQueryOptions } from 'react-query';
import { codegenFetcher } from '../lib/fetcher';
export type Maybe<T> = T | null;
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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum GqlCacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GqlCharacter = {
  __typename?: 'Character';
  /** The id of the character. */
  id: Maybe<Scalars['ID']>;
  /** The name of the character. */
  name: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: Maybe<Scalars['String']>;
  /** The species of the character. */
  species: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type: Maybe<Scalars['String']>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin: Maybe<GqlLocation>;
  /** The character's last known location */
  location: Maybe<GqlLocation>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<GqlEpisode>>;
  /** Time at which the character was created in the database. */
  created: Maybe<Scalars['String']>;
};

export type GqlCharacters = {
  __typename?: 'Characters';
  info: Maybe<GqlInfo>;
  results: Maybe<Array<Maybe<GqlCharacter>>>;
};

export type GqlEpisode = {
  __typename?: 'Episode';
  /** The id of the episode. */
  id: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name: Maybe<Scalars['String']>;
  /** The air date of the episode. */
  air_date: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<GqlCharacter>>;
  /** Time at which the episode was created in the database. */
  created: Maybe<Scalars['String']>;
};

export type GqlEpisodes = {
  __typename?: 'Episodes';
  info: Maybe<GqlInfo>;
  results: Maybe<Array<Maybe<GqlEpisode>>>;
};

export type GqlFilterCharacter = {
  name: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  species: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  gender: Maybe<Scalars['String']>;
};

export type GqlFilterEpisode = {
  name: Maybe<Scalars['String']>;
  episode: Maybe<Scalars['String']>;
};

export type GqlFilterLocation = {
  name: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  dimension: Maybe<Scalars['String']>;
};

export type GqlInfo = {
  __typename?: 'Info';
  /** The length of the response. */
  count: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev: Maybe<Scalars['Int']>;
};

export type GqlLocation = {
  __typename?: 'Location';
  /** The id of the location. */
  id: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name: Maybe<Scalars['String']>;
  /** The type of the location. */
  type: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<GqlCharacter>>;
  /** Time at which the location was created in the database. */
  created: Maybe<Scalars['String']>;
};

export type GqlLocations = {
  __typename?: 'Locations';
  info: Maybe<GqlInfo>;
  results: Maybe<Array<Maybe<GqlLocation>>>;
};

export type GqlQuery = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character: Maybe<GqlCharacter>;
  /** Get the list of all characters */
  characters: Maybe<GqlCharacters>;
  /** Get a list of characters selected by ids */
  charactersByIds: Maybe<Array<Maybe<GqlCharacter>>>;
  /** Get a specific locations by ID */
  location: Maybe<GqlLocation>;
  /** Get the list of all locations */
  locations: Maybe<GqlLocations>;
  /** Get a list of locations selected by ids */
  locationsByIds: Maybe<Array<Maybe<GqlLocation>>>;
  /** Get a specific episode by ID */
  episode: Maybe<GqlEpisode>;
  /** Get the list of all episodes */
  episodes: Maybe<GqlEpisodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds: Maybe<Array<Maybe<GqlEpisode>>>;
};


export type GqlQueryCharacterArgs = {
  id: Scalars['ID'];
};


export type GqlQueryCharactersArgs = {
  page: Maybe<Scalars['Int']>;
  filter: Maybe<GqlFilterCharacter>;
};


export type GqlQueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type GqlQueryLocationArgs = {
  id: Scalars['ID'];
};


export type GqlQueryLocationsArgs = {
  page: Maybe<Scalars['Int']>;
  filter: Maybe<GqlFilterLocation>;
};


export type GqlQueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type GqlQueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type GqlQueryEpisodesArgs = {
  page: Maybe<Scalars['Int']>;
  filter: Maybe<GqlFilterEpisode>;
};


export type GqlQueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type GqlListCharacterQueryVariables = Exact<{
  filter: Maybe<GqlFilterCharacter>;
  page: Maybe<Scalars['Int']>;
}>;


export type GqlListCharacterQuery = (
  { __typename?: 'Query' }
  & { characters: Maybe<(
    { __typename?: 'Characters' }
    & { results: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & Pick<GqlCharacter, 'id' | 'image' | 'name' | 'status' | 'species' | 'gender'>
      & { location: Maybe<(
        { __typename?: 'Location' }
        & Pick<GqlLocation, 'name' | 'dimension'>
      )>, episode: Array<Maybe<(
        { __typename?: 'Episode' }
        & Pick<GqlEpisode, 'id' | 'name'>
      )>> }
    )>>> }
  )> }
);


export const ListCharacterDocument = `
    query listCharacter($filter: FilterCharacter, $page: Int) {
  characters(filter: $filter, page: $page) {
    results {
      id
      image
      name
      status
      species
      location {
        name
        dimension
      }
      gender
      episode {
        id
        name
      }
    }
  }
}
    `;
export const useListCharacterQuery = <
      TData = GqlListCharacterQuery,
      TError = unknown
    >(
      variables?: GqlListCharacterQueryVariables, 
      options?: UseQueryOptions<GqlListCharacterQuery, TError, TData>
    ) => 
    useQuery<GqlListCharacterQuery, TError, TData>(
      ['listCharacter', variables],
      codegenFetcher<GqlListCharacterQuery, GqlListCharacterQueryVariables>(ListCharacterDocument, variables),
      options
    );