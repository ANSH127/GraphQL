import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../quaries/Quaries';
import { useNavigate } from 'react-router-dom';
import loader from '../loading.gif'


function BookList() {
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <div style={{ textAlign: 'center' }}>
        <img className='my-3' src={loader} alt="loading" width='35px' />
    </div>;
    if (error) return <p>Error :{error.message}</p>;
    console.log(data);
    return (
        <>
            <h1 className='text-center mt-4'>Book List</h1>
            <ul className="list-group">
                {data.books.map(book => (
                    <li key={book.id} className="list-group-item m-2 p-2 border  bg-light"
                        style={{
                            cursor: 'pointer'

                        }}
                        onClick={() => {
                            navigate(`/bookdetails/${book.id}`);

                        }
                        }
                    >
                        {book.name}</li>
                ))}
            </ul>
        </>
    )
}

export default BookList