import React, { useEffect, useState }  from 'react'
import './App.css';

import { List } from './List';
import { fetchData } from './utils/api'

function App() {
  const [people, setPeople] = useState([])
  const [films, setFilms] = useState([])

  useEffect(() => {
    fetchData().then(response => setPeople(response))
    console.log('the films: ', people.films)
    
  }, [])

  //console.log('the people: ', people)

  return (
    <div className="App">
     <List people={people}/>
    </div>
  );
}

export default App;
