import React from 'react'
import '../App.css';
import{ Navbar , Nav ,  Form  ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import{Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'
 
const MoviesList = () => {
const state = useSelector(state => state.searchreducer)
const movies = state.moviesList


    return (
      <>
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
        {/*show the movies*/} 
        <div className="container "  style={{paddingTop:"100px"}} > 
          <div className="flex">   
            {movies.map(movie => <div className="item"> <MovieCard movie={movie}/></div> )}
          </div>
        </div> 

      </>
    )}
export default MoviesList

