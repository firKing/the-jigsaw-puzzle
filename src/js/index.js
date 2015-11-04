import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Test from './Test';
import Image from './Image';
import data from './data';
import Timer from './Timer';


// ReactDOM.render(<Test />, document.getElementById('root'));
ReactDOM.render(<Image data ={data} />, document.getElementById('imgSpace'));
ReactDOM.render(<Timer/>, document.getElementById('timerSpace'));