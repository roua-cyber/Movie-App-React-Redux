import React from 'react'
import '../App.css';
import StarRatingComponent from 'react-star-rating-component';
import{ Navbar , Nav ,  Form  ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouteMatch,Link} from 'react-router-dom';
import {useSelector} from 'react-redux'

const Description = () => {

    const movies = useSelector(state => state.searchreducer.moviesList)
    const match = useRouteMatch();
    const movie=movies.filter(movie=> movie.title.includes ( match.url.slice(1)))
    
    return (
        <div>
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
            {/*movie description*/}
            <div className="  moviedesc " style={{background:"rgb(2,9,17)"}}>
                <div className="desccol padstar">
                <img className="pad"src={movie[0].posterUrl}  alt="im" width="150px"/>
                </div>
                <div className="desccol">
                <div className="pad" style={{fontSize:"25px" }}> {movie[0].title}({movie[0].year})</div>
                <div className="descrow">
                    <div className="desitem padstar">rate:</div>
                    <div className="desitem"><StarRatingComponent className="pad" name="rate"starCount={5}value={movie[0].rate}/></div>
                </div>
                <div className="descrow">
                    <div className="desitem padstar">year:</div>
                    <div className="desitem">{movie[0].year}</div>
                </div>  
                <div className="descrow">
                    <div className="desitem padstar">trailer:</div>
                    <div className="desitem"><a className="trailer-preview" href={movie[0].trailer} target="new">click here</a></div>
                </div> 
                <div className="descrow">
                    <div className="desitem padstar">description:</div>
                </div> 
                <div className="descrow">
                    <div className="desitem" style={{color:"gray"}}>{movie[0].description}</div>
                </div>
                <div className="pad"> 
                </div>
                </div>
            </div>  
        </div>
    )
}

export default Description ;