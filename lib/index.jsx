import React from 'react';
import styles from './styles';

const Modal = React.createClass({
  render: function() {
    const {
      show,
      close,
      children
    } = this.props;
    return !show ? <div></div> : (
      <div>
	<div className="overlay" style={styles.overlay} onClick={() => close()}></div>
	<div style={styles.dialog}>
	  <a className="close-icon" onClick={() => close()} style={styles.closeButton}>
	    &times;
	  </a>
	  <div className="modal-children">
	    {children}
	  </div>
	</div>
      </div>
    )
  }
});

export default Modal;
