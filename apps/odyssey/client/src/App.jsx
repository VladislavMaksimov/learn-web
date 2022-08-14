import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER,
  cache: new InMemoryCache(),
});

function App() {
  return (<ApolloProvider client={client}>
    <Router>
      <AppRoutes />
    </Router>
  </ApolloProvider>);
}

export default App;
