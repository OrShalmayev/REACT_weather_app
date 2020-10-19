import React from 'react';
import ReactDOM from 'react-dom';
import SelectedCity from './SelectedCity';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectedCity />, div);
  ReactDOM.unmountComponentAtNode(div);
});