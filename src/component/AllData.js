import React, { useState, useEffect,useRef } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getUsers } from '../Service/api';
import { Link } from 'react-router-dom';
import AddUser from './AddUser';


const AllData = ({data}) => {

    const [users, setUsers] = useState([]);
    

    const getAllUsers = async () => {
        let response = await getUsers();

        setUsers(response.data);
    
    }
    
    useEffect(() => {
        getAllUsers();
        
    }, []);

    // const deleteUserData = async (id) => {
    //     await deleteUser(id);
    //     getAllUsers();
    // }

    function deleteUser(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((response) => {
                console.warn(response);
            })
        })
        const item=users.filter((i)=>i.id!==id)
        setUsers(item)
    }

    

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                        

                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.slice(0,10).map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                
                                
                                <td>
                                    <Button onClick={() => deleteUser(item.id)}>
                                        Delete
                                    </Button>
                                    <Link className='text-decoration-none' to={`/edit/${item.id}`}>
                                        <Button>
                                            Edit
                                        </Button>
                                    </Link>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default AllData


// app start users 0
// users array length 0
// fetch length 0 > 
// if(users.length === 0){
// fetch();
// }
// return;