import React, { Component } from 'react';
import './App.css';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';


const bookmarks = [
  {
  title:"Google",
  url:"http://www.google.com", 
  rating:"3", 
  description:"No evil"
  },
  {
    title:"Google",
    url:"http://www.google.com", 
    rating:"3", 
    description:"No evil"
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }
  
  render() {
    return (
      <div className="App">
        <AddBookmark />
        <BookmarkApp bookmarks={bookmarks}/>
        
      </div>
    );
  }
}