const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_, { id: trackId }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(trackId);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${trackId}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id: trackId }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(trackId);
    },
  },
};

export default resolvers;
