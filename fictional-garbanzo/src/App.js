import React from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = {
  greeting: 'Is it chickpea, or is it garbanzo?',
  title: 'finctional garbanzo',
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div className="App">
      <h1>{welcome.greeting} </h1>
      <p>It is {welcome.title}</p>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <List />
    </div>
  );
}

function List() {
  return (
      <div>
          {
          list.map(function(item) {
          return <div key={item.objectID}>
          <a href={item.url}>{item.title}</a>
          <span> by {item.author}</span>
          <span>. Comments: {item.num_comments}</span>
          <span>. Points: {item.points}</span>
          </div>;
          })}
      </div>
    );
}

export default App;
