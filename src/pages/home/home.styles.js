export const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: '#ffffff',
    overflow: 'hidden'
  },

  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '15px 0',
    textAlign: 'center'
  },

  contentBox: {
    width: '100%',
    maxWidth: '450px',
    height: '140px', // 固定高度
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  roomDisplay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: '600',
    color: '#1a1a1a',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s ease',
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }
  },

  inputContainer: {
    width: '100%',
    height: '100%',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  },

  input: {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    border: '2px solid #e4e9f0',
    borderRadius: '8px',
    outline: 'none',
    marginBottom: '8px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    '&:focus': {
      borderColor: '#2563eb',
      boxShadow: '0 0 0 3px rgba(37,99,235,0.1)'
    }
  },

  buttonContainer: {
    width: '100%',
    maxWidth: '450px',
    display: 'flex',
    justifyContent: 'center'
  },

  button: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#1d4ed8'
    }
  },

  enterButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#059669'
    }
  },

  error: {
    color: '#ef4444',
    fontSize: '14px',
    marginBottom: '8px',
    textAlign: 'center',
    fontWeight: '500'
  }
}; 