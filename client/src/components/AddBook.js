import React from 'react'
import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK,GET_BOOKS } from '../quaries/Quaries';
import { useMutation } from '@apollo/client';
import loader from '../loading.gif'



function AddBook() {
    const [details, setDetails] = useState({
        bname: '',
        genre: '',
        author: ''
    });
    const { loading, error, data } = useQuery(GET_AUTHORS);
     // eslint-disable-next-line 
    const [addBook,{loading: mutationLoading,error: mutationError,data: mutationData}] = useMutation(ADD_BOOK);




    const handleSubmit = (e) => {

        e.preventDefault();
        addBook({
            variables: {
                name: details.bname,
                genre: details.genre,
                authorId: details.author
            },
            refetchQueries: [{ query: GET_BOOKS }]
            
        });
        if( !mutationLoading && !mutationError){
            alert("Book Added");
            setDetails({
                bname: '',
                genre: '',
                author:''
            });

        }
        






    }


    return (
        <>
            <h1 className='text-center mt-4'>Add Book</h1>
            {loading && 
            <div style={{ textAlign: 'center' }}>
                <img className='my-3' src={loader} alt="loading" width='35px' />
            </div>
            }
            {error && <p>Error :{error.message}</p>}
            {data && <div className="container">
                <form onSubmit={handleSubmit} >
                    <div className="mb-3 input-group-lg">
                        <label htmlFor="bname" className="form-label">Book name</label>
                        <input type="text" className="form-control" id="bname"
                            onChange={(e) => setDetails({ ...details, bname: e.target.value })}
                            value={details.bname}
                        />
                    </div>
                    <div className="mb-3 input-group-lg">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input type="text" className="form-control" id="genre"
                            onChange={(e) => setDetails({ ...details, genre: e.target.value })}
                            value={details.genre}
                        />
                    </div>
                    <div className="mb-3 input-group-lg">
                        <label htmlFor="author" className="form-label">Author</label>
                        <select className="form-select" aria-label="Default select example" id="author"
                            onChange={(e) => setDetails({ ...details, author: e.target.value })}
                        >
                            <option defaultValue value={null} >Select Author</option>
                            {data.authors.map(author => (
                                <option key={author.id} value={author.id}
                                >{author.name}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary mx-2">Submit</button>
                </form>
            </div>}

        </>
    )
}

export default AddBook