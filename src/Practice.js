import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
function Axios() {
const [id,setId] = useState(null)
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [data, setData] = useState([])
  const [data1, setData1] = useState({title: ''  })
  const { title } = data1
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const a = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setData(a.data)
  }
  const allData = (e) => {
    const value = e.target.value
    const name = e.target.name
  console.log(value);
    setData1({ ...data1, [name]: value })
  }
  const deleteData = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const datas = data.filter((s) => s.id !== id)
    setData(datas)
  }
  const addData = async () => {
    const datas = { title: title}
    console.log(datas);
    const result = await axios.post('https://jsonplaceholder.typicode.com/todos/ ', {datas})
     setData([...data,result.data.datas])
     const check = setData.slice()
    handleClose()
  }
const editData = (id,title)=>{
const datas = {
  title: title
}
setId(id);
setData1(datas);
}
const saveData = async (e)=>{
  // e.preventDefault()
    const title =   data1;
    const result =  await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {title} )
    const index = data.findIndex((item)=>item.id ===id);
data[index]= result.data.title
console.log(title);
console.log(result);
  setData1('')
    handleClose1()
}
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr >
          <th>Id</th>
          <th>Title</th>
          <th><Button variant='success' onClick={handleShow}>Add</Button></th>
        </tr>
      </thead>
      {
        data.slice(0, 10).map((e, id) =>
          <tbody >
            <tr >
              <td>{id+1}</td>
              <td>{e.title}</td>
              <td>
                <Button onClick={() => deleteData(e.id)}>Delete</Button>{' '}
                <Button variant="info" onClick={() => {
                  handleShow1();
                  editData(e.id,e.title);
                }}> Update </Button>
              </td>
            </tr>
          </tbody>
        )
      }
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3"    >
              <Form.Control
                type="text"
                autoFocus
                name="title"
                value={title}
                onChange={allData}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}  >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    {/* </Table> */}
 <Modal show={show1} onHide={handleClose1} >
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Group className="mb-3"    >
      <Form.Control
        type="text"
        autoFocus
        name="title"
        value={title}
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
    Save Changes
  </Button>
</Modal.Footer>
</Modal>
</Table>
  );
}
export default Axios;