import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "get tracks for the homepage"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  "A group of modules that teaches of a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    "The track's complete description, can be in Markdown"
    description: String
    "The number of time a track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  "Multiple modules compose a track"
  type Module {
    id: ID!
    title: String!
    "The module's length in minutes"
    length: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    "profile photo url"
    photo: String
  }
`;

export default typeDefs;
