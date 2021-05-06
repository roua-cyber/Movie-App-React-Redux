import React from 'react';
import './App.css';
import{BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import MoviesList from './components/MoviesList' 
import Description from './components/description';
import Add from './components/add'
function App () {
  return (
  <div className="bigcontainer">
    <Router>
      <Switch>       
        {/*main page*/} 
        <Route exact path="/">
          <MoviesList />
        </Route>     
        {/*add a movie*/} 
        <Route path="/add" component={Add} >
        </Route>
        {/*description page*/}
        <Route path="/:id">
          <Description/>
        </Route>      
      </Switch>      
    </Router>  
  </div>
  )
}
export default App ;