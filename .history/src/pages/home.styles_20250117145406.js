export const styles = {
  container: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh'
  },

  title: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#333',
    margin: '10px 0'
  },

  roomDisplay: {
    fontSize: '24px',
    fontWeight: '500',
    color: '#333',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:active': {
      transform: 'scale(0.98)'
    }
  },

  inputContainer: {
    width: '100%',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },

  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #e4e9f0',
    borderRadius: '6px',
    outline: 'none',
    marginBottom: '15px',
    '&:focus': {
      borderColor: '#007AFF'
    }
  },

  buttonGroup: {
    display: 'flex',
    gap: '8px',
    width: '100%'
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

  cancelButton: {
    backgroundColor: '#6c757d'
  },

  error: {
    color: '#dc3545',
    fontSize: '14px',
    marginBottom: '15px',
    textAlign: 'center'
  }
}; 