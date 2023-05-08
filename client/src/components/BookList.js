import React from 'react'
import {useQuery } from '@apollo/client';
import { GET_BOOKS } from '../quaries/Quaries';


function BookList() {
    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading Books ...</p>;
    if (error) return <p>Error :{error.message}</p>;
    console.log(data);
    return (
        <>
            <h1 className='text-center mt-4'>Book List</h1>
            <ul className="list-group">
                {data.books.map(book => (
                    <li key={book.id} className="list-group-item">{book.name}</li>
                ))}
            </ul>
        </>
    )
}

export default BookList