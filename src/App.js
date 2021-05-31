import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState} from 'react'


import './App.css';
import FoodItems from './FoodItems'
import Recipe from './Recipe'
import Food from './Food'

function App() {

  const [foodItems, setFoodItems ] = useState([]);

  // useEffect(() => {
  //     fetch("http://localhost:6800/food", { method: "GET" })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //         console.log(data);
  //       setFoodItems(data);
  //     });
  // }, [])

  return (
    <div className="App">
      <h1> Food Blog</h1>
      <hr />
      <Router>
        <Route exact path="/" component={FoodItems}/>
        <Route path="/recipe/:id" component={Recipe}></Route>
        <Route path="/food/:id">
          <Food/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
