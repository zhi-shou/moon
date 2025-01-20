export const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    maxWidth: '600px',
    margin: '0 auto'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    position: 'sticky',
    top: 0,
    backgroundColor: '#f5f5f5',
    padding: '10px 0',
    zIndex: 100
  },

  title: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    margin: 0
  },

  postButton: {
    padding: '8px 16px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#059669'
    }
  },

  post: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },

  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },

  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },

  avatar: {
    fontSize: '24px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '50%'
  },

  userText: {
    display: 'flex',
    flexDirection: 'column'
  },

  userName: {
    fontWeight: '500',
    color: '#333',
    fontSize: '16px'
  },

  roomNumber: {
    color: '#666',
    fontSize: '12px'
  },

  time: {
    color: '#999',
    fontSize: '12px'
  },

  postContent: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#333',
    marginBottom: '12px'
  },

  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    marginBottom: '12px'
  },

  imageContainer: {
    paddingTop: '100%',
    position: 'relative'
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px'
  },

  actions: {
    display: 'flex',
    gap: '24px',
    borderTop: '1px solid #f0f0f0',
    borderBottom: '1px solid #f0f0f0',
    padding: '12px 0',
    marginBottom: '12px'
  },

  action: {
    color: '#666',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#10b981'
    }
  },

  comments: {
    marginBottom: '12px'
  },

  comment: {
    fontSize: '14px',
    lineHeight: 1.6,
    marginBottom: '8px'
  },

  commentUser: {
    color: '#10b981',
    fontWeight: '500'
  },

  commentContent: {
    color: '#333'
  },

  commentInput: {
    display: 'flex',
    gap: '8px'
  },

  input: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #e5e7eb',
    borderRadius: '20px',
    outline: 'none',
    fontSize: '14px',
    '&:focus': {
      borderColor: '#10b981'
    }
  },

  sendButton: {
    padding: '8px 16px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#059669'
    }
  }
}; 