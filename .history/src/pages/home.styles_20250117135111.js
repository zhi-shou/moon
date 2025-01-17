export const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  
  buildingSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '15px',
    width: '100%',
    maxWidth: '500px',
    marginBottom: '30px'
  },

  numberSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    width: '100%',
    maxWidth: '300px',
    marginBottom: '30px'
  },

  block: {
    width: '100%',
    aspectRatio: '1',
    border: '2px solid #ddd',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    cursor: 'pointer',
    backgroundColor: 'white',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#f0f0f0'
    }
  },

  selectedBlock: {
    backgroundColor: '#007AFF',
    color: 'white',
    border: '2px solid #007AFF'
  },

  result: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0'
  },

  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px'
  },

  button: {
    padding: '12px 24px',
    backgroundColor: '#007AFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#0056b3'
    }
  },

  resetButton: {
    backgroundColor: '#6c757d'
  }
}; 