
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


const GET_BOOKDETAILS = gql`
    query GetBookDetails($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }`;

export {GET_BOOKS, GET_AUTHORS, ADD_BOOK, GET_BOOKDETAILS};



