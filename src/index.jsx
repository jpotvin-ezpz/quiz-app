import React from 'react';
import ReactDOM from 'react-dom';
import QuizApp from './QuizApp';
import './styles/index.css';

function Index() {
return <QuizApp />
}

ReactDOM.render(<Index />, document.getElementById('root'));