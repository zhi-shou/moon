export const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    maxWidth: '800px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },

  title: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#333'
  },

  askButton: {
    padding: '8px 20px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(16, 185, 129, 0.2)',
    '&:hover': {
      backgroundColor: '#059669',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)'
    }
  },

  categories: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    overflowX: 'auto',
    padding: '4px',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },

  category: {
    padding: '8px 16px',
    backgroundColor: 'white',
    borderRadius: '20px',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    '&:hover': {
      backgroundColor: '#f3f4f6'
    }
  },

  activeCategory: {
    backgroundColor: '#10b981',
    color: 'white',
    '&:hover': {
      backgroundColor: '#059669'
    }
  },

  categoryIcon: {
    fontSize: '16px'
  },

  questionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },

  questionCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },

  questionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },

  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },

  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px'
  },

  authorText: {
    display: 'flex',
    flexDirection: 'column'
  },

  authorName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333'
  },

  authorRoom: {
    fontSize: '12px',
    color: '#666'
  },

  time: {
    fontSize: '12px',
    color: '#666'
  },

  questionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '12px'
  },

  questionContent: {
    fontSize: '14px',
    color: '#666',
    lineHeight: 1.6,
    marginBottom: '16px'
  },

  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px'
  },

  tag: {
    padding: '4px 12px',
    backgroundColor: '#f3f4f6',
    borderRadius: '16px',
    fontSize: '12px',
    color: '#666'
  },

  questionMeta: {
    display: 'flex',
    gap: '16px',
    fontSize: '13px',
    color: '#666',
    marginBottom: '16px'
  },

  answers: {
    borderTop: '1px solid #f3f4f6',
    paddingTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },

  answer: {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    padding: '16px'
  },

  answerContent: {
    fontSize: '14px',
    color: '#333',
    lineHeight: 1.6,
    marginBottom: '12px'
  },

  answerActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },

  likeButton: {
    padding: '6px 12px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '16px',
    fontSize: '13px',
    color: '#666',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#f3f4f6',
      color: '#10b981'
    }
  },

  answerButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: '16px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#059669'
    }
  },

  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  },

  modalContent: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    width: '100%',
    maxWidth: '600px',
    maxHeight: '80vh',
    overflow: 'auto'
  },

  modalTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center'
  },

  closeButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    padding: '8px',
    backgroundColor: 'transparent',
    color: '#666',
    border: 'none',
    borderRadius: '50%',
    fontSize: '20px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f3f4f6',
      color: '#333'
    }
  }
}; 