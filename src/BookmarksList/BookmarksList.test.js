import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkList from './BookmarksList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookmarkList />, div);
  ReactDOM.unmountComponentAtNode(div);
});