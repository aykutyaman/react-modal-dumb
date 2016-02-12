# react-modal-dumb

## Installation
```
$ npm install --save react-modal-dumb
```

## Usage
```
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
$ npm run dev
```
Now edit lib files and examples/index.jsx. After that run examples/index.html in
order to see the results.
