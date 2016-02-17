[![Build Status](https://travis-ci.org/aykutyaman/react-modal-dumb.svg?branch=master)](https://travis-ci.org/aykutyaman/react-modal-dumb)

# react-modal-dumb

## Installation
```
$ npm install --save react-modal-dumb
```

## Usage
```jsx
import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal-dumb';

const SideNav = React.createClass({
  getInitialState: function() {
    return {
      editing: false
    }
  },
  setEditing: function(editing) {
    this.setState({editing});
  },
  render: function() {
    const {editing} = this.state;
    return (
      <div>
	<a href="#" id="modal-launcher" onClick={() => this.setEditing(true)}>Araç Listesi</a>
	<Modal show={editing} close={()=> this.setEditing(false)}>
	  hello modal
	</Modal>
      </div>
    )
  }
});


render(<SideNav />, document.getElementById('hello'));
```

## For development
Run webpack in watch mode with the webpack.config.dev.js config file
```
$ git clone git@github.com:aykutyaman/react-modal-dumb.git
$ cd react-modal-dumb
$ npm install
$ npm run dev
```
Open http://localhost:8080/webpack-dev-server/bundle in order to see the results.
Now edit lib files or examples/index.jsx to develop your awesome component.
