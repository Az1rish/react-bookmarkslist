import React from 'react';
import ReactDOM from 'react-dom';
import BookmarksList from './BookmarksList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookmarksList />, div);
  ReactDOM.unmountComponentAtNode(div);
});