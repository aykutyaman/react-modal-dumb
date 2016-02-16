import React from 'react';
import { render } from 'react-dom';

import Modal from '../lib/index.jsx';

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

export default SideNav;


render(<SideNav />, document.body);
