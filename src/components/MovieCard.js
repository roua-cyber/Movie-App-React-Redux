import React from 'react'
import{ Card ,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import{Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import {useDispatch} from 'react-redux'
import {deleteMovie} from '../actions/searchaction'

const MovieCard = ({movie}) => {
    const dispatch = useDispatch()

return (
        <Card className=" text-white movie " style={{background:"rgb(2,9,17)"}}>
            <div className="pad"> {movie.title}({movie.year})</div>
            <StarRatingComponent className="pad" name="rate"starCount={5}value={movie.rate}/>
            <img className="pad"src={movie.posterUrl}  alt="im" width="120px"/>
            <div className="pad"> <Link style={{color:"rgb(217,102,84)"}} to={`/${movie.title}`}>see more</Link> </div>
            <div className="pad"> <Button onClick={()=>dispatch(deleteMovie(movie.id))} variant="outline-light">Delete</Button> </div>

            <div className="pad"> 
            </div>
               
        </Card>   
)}

export default MovieCard ;