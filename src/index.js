import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyDH5V8jCLjKEtMlgsTPpqs5caCxriuUdZ8';

//Create a new component that outputs HTML code on the DOM 

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));