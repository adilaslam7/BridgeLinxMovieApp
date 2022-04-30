import React, {useState} from 'react';
import SearchBar from "./search"

export default function Navbar(props    ) {  
    return (    
        <nav class="bg-gray-800 sticky top-0 z-50">
            <div class=" max-w-full px-2 sm:px-6 lg:px-8 ">
                <div class="relative flex justify-between h-16 ">    
                    <div class="flex-1 flex justify-center sm:items-stretch sm:justify-start ">
                        <div class="flex-shrink-1 flex items-center mr-8">
                             <img class="block h-8 w-auto" src="https://img.icons8.com/fluency/48/000000/popcorn.png" alt="MovieBase"/>
                            <div class="hidden lg:block px-2 py-2 rounded-md ">
                                <span class="text-white text-xl font-medium" >Movie</span>
                                <span class="text-cyan-300 text-xl font-bold" >Base</span>
                            </div>
                        </div>
                        <SearchBar searchAction={props.func} />
                    </div>
                </div>
            </div>
        </nav>
    );
}