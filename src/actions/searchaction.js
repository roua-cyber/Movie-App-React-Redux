import{ ADD_MOVIE , DELETE_MOVIE} from'./types'
  
  export const addMovie=(newmovie)=> {
      return (
   {  type: ADD_MOVIE,
      payload: newmovie
    }
      )
  }
  export const deleteMovie=(id)=> {
    return (
 {  type: DELETE_MOVIE,
    payload: id
  }
    )
}