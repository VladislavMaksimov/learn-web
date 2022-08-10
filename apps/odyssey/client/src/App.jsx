import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { HomePage } from './pages/HomePage/HomePage';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER,
  cache: new InMemoryCache(),
});

function App() {
  return (<ApolloProvider client={client}>
    <HomePage />
  </ApolloProvider>);
}

export default App;
