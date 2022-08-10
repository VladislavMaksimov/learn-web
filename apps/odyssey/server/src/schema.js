import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "get tracks for the homepage"
    tracksForHome: [Track!]!
  }

  "A group of modules that teaches of a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
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
