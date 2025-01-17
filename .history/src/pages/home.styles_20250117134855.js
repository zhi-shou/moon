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
    gap: '10px',
    width: '100%',
    maxWidth: '500px'
  },

  numberSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    width: '100%',
    maxWidth: '300px'
  },

  block: {
    width: '100%',
    aspectRatio: '1',
    border: '1px solid #ddd',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    cursor: 'pointer',
    backgroundColor: 'white',
    transition: 'all 0.3s'
  },

  selectedBlock: {
    backgroundColor: '#007AFF',
    color: 'white'
  },

  result: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0'
  },

  button: {
    padding: '12px 24px',
    backgroundColor: '#007AFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer'
  }
}; 