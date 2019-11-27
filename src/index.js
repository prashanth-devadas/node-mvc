import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyDegCXg10-RkUJwHEBLSx8k8eIVDW50A-M';

//Create a new component that outputs HTML code on the DOM 

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));