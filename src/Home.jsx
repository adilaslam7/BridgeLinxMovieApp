import React from "react";
import MovieCard from './components/movieCard'

const Home = ({movies}) => {
    return <div class="container px-4 flex-grow w-full py-4 sm:py-16 mx-auto ">
             <div class="mx-auto w-full md:w-4/5 px-4">
                <div class="container">
                   <div class="flex justify-between items-center mb-4">
                   <h2 class="text-3xl font-medium">Search Results</h2>
                   </div>
                   <div id="scrollContainer" class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 hide-scroll-bar">
                         {movies.length > 0 ? movies.map((movie, index)=>(
                      <MovieCard key={index} movie={movie}/>)):<h1>no movies</h1>}
                   </div>
                </div>
             </div>
          </div>;
    
 }

 export default Home;