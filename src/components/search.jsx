import React, {Component, useState} from 'react'; 
 
 class SearchBar extends Component{
    // const [text, changeText] = useState('');

    state = {
        text:"",
        category:"All",
        categoryHide:true

    };

    categoryHideToggle = () => {
        this.setState((state) => ({
            categoryHide:!state.categoryHide
        }));
        console.log(this.state.categoryHide);
    }
    changeTextEvent = (e) =>{
        this.state.text=e.target.value;
        console.log(e.target.value);
    }
    changeCategoryEvent = (e) =>{
        this.state.category=e.target.value;
        console.log(e.target.value);
        categoryHideToggle();
    }

    render()
    {
        return <div class="flex px-2 relative  text-gray-600 bg-white m-2 ml-2 rounded-lg">
        <div class="flex justify-center">
            <div class="pt-2 items-center"> 
                <button onClick={(e) => this.categoryHideToggle()} class="border-r-2 bloc text-gray-600 px-6 text-sm overflow-hidden">
                    <div class="flex justify-between"> 
                        <span>{this.state.category}</span> 
                        <svg class="fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M7 10l5 5 5-5z" />
                                <path d="M0 0h24v24H0z" fill="none" />
                        </svg> 
                    </div>
                </button>
                <div class={" " + this.state.categoryHide == false ? "hidden":"block" + " py-2 bg-white rounded-lg shadow-xl items-s"}> 
                    <button value = "all" onClick={(e) => this.changeCategoryEvent(e)} class="block px-4 py-2 text-gray-600 hover:bg-gray-800 hover:text-white">All</button> 
                    <button value = "movie" onClick={(e) => this.changeCategoryEvent(e)} class="block px-4 py-2 text-gray-600 hover:bg-gray-800 hover:text-white">Movies</button> 
                    <button value = "series" onClick={(e) => this.changeCategoryEvent(e)} class="block px-4 py-2 text-gray-600 hover:bg-gray-800 hover:text-white">Tv Shows</button> 
                    <button value = "episode" onClick={(e) => this.changeCategoryEvent(e)} class="block px-4 py-2 text-gray-600 hover:bg-gray-800 hover:text-white">Episodes</button> 
                </div>
            </div>
        </div>
        <input class="flex basis-4 px-5 pr-16 text-sm focus:outline-none"
        type="search" name="search" placeholder="Search" onChange={(e)=>this.changeTextEvent(e)}/>
            <button type="submit" class="absolute right-0 top-0 mt-4 mr-4" onClick={()=>this.props.searchAction(this.state.text, this.state.category)}>

                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" space="preserve"
                width="512px" height="512px">   
                    <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </button>
    </div>;
    }
}

export default SearchBar;