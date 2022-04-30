import React from "react";

export default function MovieCard({movie}) {
    return (
        <div
        class="flex-none w-96 md:w-1/3 mr-8 md:pb-4 border rounded-lg"
      >
        <a href="#" class="space-y-4">
          <div class="aspect-w-16 aspect-h-9">
            <img
              class="object-cover w-full h-44 md:h-48 shadow-md hover:shadow-xl rounded-lg"
              src={movie.Poster}
              alt=""
            />
          </div>    
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-gray-800 text-2xl mb-2">
                {movie.Title}
              </h3>
            </div>
            <div class="text-lg">
                
              <p class="inline-block">
              {movie.Year}
              </p>
              <p class="inline-block pl-4">
              {movie.Type}
              </p>
            </div>
          </div>
        </a>
      </div>
    );
}

