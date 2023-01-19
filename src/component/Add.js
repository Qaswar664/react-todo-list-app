import { useState, useRef } from "react";
import AllData from "./AllData";


const Form = () => {
    const [formValues, setFormValues] = useState({
      title: "",
      body: "",
    });

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
        
    };

    return (
    <>
      
        <form id="formu" onSubmit={handleSubmit} className="row">
          <h1>Add data</h1>
          <div className="col-md-6">
            <label>Title</label>
            <input
              placeholder="Title"
              name="title"
              value={formValues?.title}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Body</label>
            <input
              type="text"
              placeholder="Body"
              name="body"
              value={formValues.body}
              onChange={handleChange}
            />
          </div>
          
          <button style={{width:"8rem",marginLeft:"110px"}} type="submit" className="color-primary">
            Save
          </button>
        </form>
      
        <AllData data={formValues} />
      
    </>
  );
};

export default Form;
