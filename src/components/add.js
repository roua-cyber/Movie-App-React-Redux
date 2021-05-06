import React,{useState} from 'react'
import '../App.css';
import{ Navbar , Nav ,  Form  ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuidv4} from 'uuid'
import{Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {addMovie} from '../actions/searchaction'

const Add = ({history}) => {

    const [input,setInput]=useState(
      { title:"",
        description:"",
        posterUrl:"https://i.egycdn.com/pic/WmFwZndlY21Zb3RjbWFjbXp4d1RFbXBtbG1F.jpg" ,
        rate:1,
        year:"",
        trailer:"",
        id:uuidv4()
      })
 
    const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
    console.log(input)
    }
    const handleSave=()=>{
      dispatch(addMovie(input) )
      history.push("/")
      }
    const dispatch = useDispatch()
    return (      

      <> {console.log(history)}
        {/*header*/}
        <Navbar className="navbar navcolor padtop" >
          <Nav className=" mr-auto">
              <Nav.Link className="navclass" ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">WatchList</Link></Nav.Link>
          </Nav>      
          <Form className="navclass" inline>                        
                  <Button variant="outline-light"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></Button>
                  <Button variant="outline-light"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add">+Add</Link></Button>
          </Form>
        </Navbar>  
        {/*add a movie*/} 
       <div className="container "  style={{paddingTop:"100px" }}>
          <div className="add">
            <label  style={{width:"100px"}}>Title:</label>
            <input type='text' name="title" onChange={handleChange}  /><br />
            <label  style={{width:"100px"}}>Genre:</label>
            <input type='text' name="description" onChange={handleChange}  /><br />
            <label  style={{width:"100px"}}>Image:</label>
            <input type='text' name="posterUrl" onChange={handleChange} /><br />
            <label  style={{width:"100px"}}>Rating:</label>
            <input type='text' name="rate" onChange={handleChange}  /><br />
            <label  style={{width:"100px"}}>Year:</label>
            <input type='text' name="year" onChange={handleChange} /><br />
            <label  style={{width:"100px"}}>trailer:</label>
            <input type='text' name="year" onChange={handleChange} /><br />            
            <Button style={{float:"right"}}variant="outline-light" onClick={handleSave }>Add movie</Button>
          </div>
        </div>
      </>
    )
}

export default Add