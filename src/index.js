import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component that outputs HTML code on the DOM 

const App = () => {
    return <div>Hello!</div>;
}

ReactDOM.render(<App/>, document.querySelector('.container'));