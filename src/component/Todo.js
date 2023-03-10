import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useState } from "react";
import { useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
function Todo() {

    const [id, setId] = useState(null)
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [data, setData] = useState([])
    const [data1, setData1] = useState({ title: '', body: '' })
    const { title, body } = data1
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true);
       setData1({ title: '', body: '' });
    setAlready(false)};
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [search, setSearch] = useState("");
    const [print, setPrint] = useState()
    const [already, setAlready] = useState(false)


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const a = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(a.data)
    }


    const allData = (e) => {
        const value = e.target.value
        const name = e.target.name

        console.log(value);
        setData1({ ...data1, [name]: value })
    }
    const deleteData = async (id) => {
        // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const datas = data.filter((item) => item.id !== id)
        setData(datas)
    }




    const addData = async () => {
        const datas = { title: title, body: body }
        console.log(datas);


        const isFound = data.some(element => {
            if (element.title === title && element.body) {
                return true;


            }
            handleClose()

            return data.unshift(datas)
        });
        setAlready(true)


        setPrint(isFound)
        //   if (isFound) {
        //     alert('data already exist');
        //   }   
        // const result = await axios.post('https://jsonplaceholder.typicode.com/todos/ ', {datas})
        //  setData([...data,result.data.datas])

        // const check = data.unshift(datas)

        // console.log('data added', check);


    }


    const editData = (id, title, body) => {
        const datas = {
            title: title,
            body: body
        }
        setId(id);
        setData1(datas);
    }


    const saveData = async (e) => {
        e.preventDefault()
        const data1 = {
            title,
            body
        }
        const result = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { data1 })
        const index = data.findIndex((item) => item.id === id);
        data[index] = result.data.data1
        console.log(title);
        console.log(result);
        setData1('')
        handleClose1()
    }



    return (
        <div>
            <div>
                <Form.Group className="m-2 w-25"    >
                    <Form.Control placeholder="search..." value={search} name="search" onChange={(e) => { setSearch(e.target.value) }} />
                </Form.Group>
                {search && data.length === 0 && (
                    <div style={{ color: "dark" }}>Sorry, this name does not exist</div>
                )}
            </div>

            <Table striped bordered hover variant="light">
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th><Button variant='success' onClick={handleShow}>Add user</Button></th>
                    </tr>
                </thead>

                {

                    data.filter((items) => items.title.toLowerCase().includes(search.toLowerCase())).slice(0, 10).map((e, id) =>
                        <tbody >
                            <tr key={e.key} >
                                <td>{id + 1}</td>
                                <td>{e.title.substring(0, 20)}</td>
                                <td>{e.body.substring(0, 20)}</td>
                                <td>
                                    <Button className='btn btn-danger' onClick={() => deleteData(e.id)}>Delete</Button>
                                    <Button variant="info" onClick={() => {
                                        handleShow1();
                                        editData(e.id, e.title, e.body);
                                    }}> Update </Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Add User data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" id='title'   >
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={allData}

                                />
                                <span className='text-danger' >{already ? "alread exist" : ''}</span>
                            </Form.Group>
                            <Form.Group className="mb-3" id='body'   >
                                <Form.Control
                                    type="text"
                                    name="body"
                                    value={body}
                                    onChange={allData}
                                />
                                <span className='text-danger' >{already ? "alread exist" : ''}</span>

                            </Form.Group>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={addData}  >
                            Add Data
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* </Table> */}
                <Modal show={show1} onHide={handleClose1} >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3"    >
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={allData}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3"    >
                                <Form.Control
                                    type="text"
                                    name="body"
                                    value={body}
                                    onChange={allData}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveData} >
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Table>

        </div>
    );
}
export default Todo;