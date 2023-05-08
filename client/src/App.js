
import './App.css';
import BookList from './components/BookList';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Navbar from './components/Navbar';

import AddBook from './components/AddBook';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from 'react-router-dom';
import Bookdetails from './components/Bookdetails';
function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <Router>

          <Navbar />
          <Routes>
            <Route exact path="/" element={<BookList />} />
            <Route exact path="/addbook" element={<AddBook />} />
            <Route exact path="/bookdetails/:id" element={<Bookdetails/>} />

          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
