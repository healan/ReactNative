import React, {useEffect} from 'react';
import TodoList from './components/TodoList';

const axios = require('axios');
var authors = [];
var titles = [];

const loadTitle = async () => {
  try {
      var response = await axios.get('https://poetrydb.org/title');
      titles = response.data.titles;
      console.log('titles:', titles[0]);
  } catch (error) {
      console.log(error);
  }
}

const loadAuthor = async () => {
  try {
      var response = await axios.get('https://poetrydb.org/author');
      authors = response.data.authors;
      console.log('author:', authors[0]);
  } catch (error) {
      console.log(error);
  }
}

const App = () => {

  useEffect(() => {
    console.log('show');
    loadAuthor();
    loadTitle();
    return () => {
        console.log('hide');
    };
  }, []);
  
  return (
    <TodoList />
  );
};

export default App;