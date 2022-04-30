const BASE_URL = "http://www.omdbapi.com/?";
const API_KEY = "6ffe9828";

export function search(text, category) {
    if (text === undefined){
        text = "";
    }
    if (category === "All")
    {
        category = "";
    }
    else{
        category = "&type=" + category;
    }

    console.log(BASE_URL + 'apikey=' + API_KEY + '&s=' + text + category);
    console.log('searchString is ' + text);
    return fetch(BASE_URL + 'apikey=' + API_KEY + '&s=' + text);
}