import { gql } from '@apollo/client';

export const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;
