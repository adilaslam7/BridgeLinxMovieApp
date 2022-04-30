import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";

import Home from "./Home";

import NavBar from './components/navBar.jsx';
import {search} from './dataHandlers/apiHandler.js';

// import { initialState, reducer } from "./models/movieReducer";
// import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
class App extends Component{
   state = {
      movies:[],
      // searchText:""
   }
   constructor(props){
      super(props);
      //does whatever stuff        
      this.submitSearch = this.submitSearch.bind(this);

  }

   submitSearch = (text, category) =>{
      console.log(text);
      search(text, category).then(
         (response)=>response.json().then((responseJSON)=>
         this.setState(
            this.state.movies = responseJSON.Search
         )));
         console.log(this.state.movies[0]);
   }

   componentDidMount(){
      search().then(
         (response)=>response.json().then((responseJSON)=>
         this.setState(
            this.state.movies = responseJSON.Search
         )));
         console.log(this.state.movies[0]);
   }

   render(){
       return (
    <>
      <NavBar func={this.submitSearch} />
     <Home movies={this.state.movies}/>
    </>
  );
  }
}



export default hot(module)(App);