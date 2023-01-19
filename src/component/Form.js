import { useState, useRef } from "react";
import View from "./View";
import AllData from "./AllData";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Add= () => {
    const [formValues, setFormValues] = useState({
      name: "",
      priceUnitary: "",
      size: "",
      description: ""
    });
    const [isFormVisible, setIsFormVisible] = useState(true);

    const inputFileRef = useRef();

    const handleChange = (event) => {
        
        const { name, value } = event.target;
        console.log(name, value);

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(inputFileRef?.current?.files);
        setIsFormVisible(false);
        e.reset();
    };

    return (
    <>
      {/* {isFormVisible ? ( */}
        <Form id="formu" onSubmit={handleSubmit} className="row">
          <h1>FORM SEND</h1>
          <Form.Group className="col-md-6" controlId="formtext">
          <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Text input"
              name="name"
              value={formValues?.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col-md-6" controlId="formte">
          <Form.Label>Body</Form.Label>
            <Form.Control
              type="text"
              placeholder="Text input"
              name="size"
              value={formValues.size}
              onChange={handleChange}
            />
          </Form.Group>
          
          <Button className="btn btn-primary mb-3 mt-3 w-50"  >
            Save
          </Button>
        </Form>
      {/* )  */}
      {/* : ( */}
       
        <AllData data={formValues} />

      {/* )} */}
    </>
  );
};

export default Add;