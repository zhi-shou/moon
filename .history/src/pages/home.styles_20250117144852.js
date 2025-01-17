export const styles = {
  container: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f5f7fa'
  },

  title: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#333',
    margin: '10px 0'
  },
  
  buildingSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '8px',
    width: '100%',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },

  numberSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    width: '100%',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },

  block: {
    aspectRatio: '1',
    border: '1px solid #e4e9f0',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'white',
    transition: 'all 0.2s',
    color: '#333',
    userSelect: 'none',
    '&:active': {
      transform: 'scale(0.95)'
    }
  },

  selectedBlock: {
    backgroundColor: '#007AFF',
    color: 'white',
    border: '1px solid #007AFF'
  },

  result: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#333',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },

  buttonGroup: {
    display: 'flex',
    gap: '8px',
    width: '100%',
    marginTop: '10px'
  },

  button: {
    flex: '1',
    padding: '10px',
    backgroundColor: '#007AFF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:active': {
      transform: 'scale(0.98)'
    }
  },

  resetButton: {
    backgroundColor: '#6c757d'
  },

  error: {
    color: '#dc3545',
    fontSize: '14px',
    marginTop: '8px',
    textAlign: 'center'
  }
}; 