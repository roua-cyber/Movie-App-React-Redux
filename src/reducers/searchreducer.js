import {ADD_MOVIE ,DELETE_MOVIE } from '../actions/types'
import {v4 as uuidv4} from 'uuid'

const data={ moviesList:[
    { id:uuidv4(),
      title:"Wonder Woman",
      description:"Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.",
      posterUrl:"https://i.egycdn.com/pic/WmFwZndlY21ZVGp2Y3ZObW1hY21URVBtYm1UbXhQ.jpg",
      rate:3,
      year:2020,
      trailer : "https://www.youtube.com/watch?v=XW2E2Fnh52w&ab_channel=WarnerBros.Pictures"
    },
    { id:uuidv4(),
      title:"Avengers Endgame",
      description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      posterUrl:"https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm12bWpFY21ibUVtSGNtRW1FY3dQ.jpg",
      rate:5,
      year:2019,
      trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment"    
    },
    { id:uuidv4(),
      title:"Iron Man 3",
      description:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      posterUrl:"https://pic.egybest.net/i/WmFwZndlY212bW1tcGJtRUVjbXZtRW1USXhtam1wSQ.jpg",
      rate:4,
      year:2013,
      trailer : "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc&ab_channel=MarvelUK"
    }],
}

  const searchreducer=(state=data,action) => {
    switch(action.type) {
       case ADD_MOVIE:
         return  {...state , moviesList : [...state.moviesList,action.payload]} ; 
         case DELETE_MOVIE:
          return  {...state , moviesList : state.moviesList.filter(movie=>movie.id!==action.payload)} ; 
       default :return state ;
    }
 }
 
 export default searchreducer ; 

