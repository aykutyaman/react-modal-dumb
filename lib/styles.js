const styles = {
  dialog: {
    width: '50%',
    height: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-200px',
    marginLeft: '-25%',
    backgroundColor: '#fff',
    borderRadius: '2px',
    zIndex: '10000',
    padding: '15px',
    boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '1001',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  closeButton: {
    cursor: 'pointer',
    position: 'absolute',
    fontSize: '1.8em',
    right: '10px',
    top: '0'
  }
};

export default styles;
