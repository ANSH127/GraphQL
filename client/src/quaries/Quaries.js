
import {gql} from '@apollo/client';

const GET_BOOKS = gql`
    {
        books {
            name
            id
        }
    }`;


    

const GET_AUTHORS = gql`
    {
        authors {
            name
            id
        }
    }`;


const ADD_BOOK = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }`;




export {GET_BOOKS, GET_AUTHORS, ADD_BOOK};



