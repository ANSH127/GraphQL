import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_BOOKDETAILS } from '../quaries/Quaries';
import { useParams } from 'react-router-dom';
import loader from '../loading.gif'

function Bookdetails() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_BOOKDETAILS, { variables: { id: id }, });

    if (loading) return <div style={{ textAlign: 'center' }}>
        <img className='my-3' src={loader} alt="loading" width='35px' />
        </div>;
    if (error) return <p>Error :{error.message}</p>;
    console.log(data);



    return (
        <>
            <h1 className='text-center mt-4'>Book Details</h1>
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{data.book.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{data.book.genre}</h6>
                        <p className="card-text">Author: {data.book.author.name}</p>
                        <p className="card-text">Age: {data.book.author.age}</p>
                        <p className="card-text">All Books by this author:</p>
                        <ul className="list-group">
                            {data.book.author.books.map(book => (
                                <li key={book.id} className="list-group-item">
                                    {book.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Bookdetails