import { RESTDataSource } from 'apollo-datasource-rest';

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.DATA_URL;
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

export default TrackAPI;
