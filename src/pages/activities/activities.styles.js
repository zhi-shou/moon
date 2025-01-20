export const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    padding: '0 10px'
  },

  title: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#333'
  },

  createButton: {
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

  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    padding: '0 10px',
    overflowX: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },

  tab: {
    padding: '10px 20px',
    backgroundColor: 'white',
    borderRadius: '20px',
    cursor: 'pointer',
    color: '#666',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    '&:hover': {
      backgroundColor: '#f8f9fa'
    }
  },

  activeTab: {
    backgroundColor: '#10b981',
    color: 'white',
    '&:hover': {
      backgroundColor: '#059669'
    }
  },

  tabIcon: {
    fontSize: '16px'
  },

  activityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    padding: '0 10px'
  },

  activityCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    maxHeight: '420px',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }
  },

  activityImage: {
    height: '42px',
    backgroundColor: '#f3f4f6',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1))'
    }
  },

  activityType: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '4px 8px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    borderRadius: '12px',
    fontSize: '12px',
    zIndex: 1
  },

  activityContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },

  activityTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 8px 0',
    lineHeight: 1.4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  activityTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '8px'
  },

  tag: {
    padding: '4px 10px',
    backgroundColor: '#f3f4f6',
    borderRadius: '12px',
    fontSize: '12px',
    color: '#666',
    whiteSpace: 'nowrap'
  },

  activityInfo: {
    fontSize: '13px',
    color: '#666',
    marginBottom: '8px',
    '& p': {
      margin: '2px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  },

  activityDesc: {
    fontSize: '13px',
    lineHeight: 1.5,
    color: '#666',
    marginBottom: '12px',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  activityFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #f3f4f6',
    paddingTop: '12px',
    marginTop: 'auto'
  },

  organizer: {
    fontSize: '13px',
    color: '#666'
  },

  joinButton: {
    padding: '6px 14px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#059669',
      transform: 'translateY(-1px)'
    },
    '&:disabled': {
      backgroundColor: '#e5e7eb',
      cursor: 'not-allowed',
      transform: 'none'
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
    borderRadius: '16px',
    padding: '24px',
    width: '100%',
    maxWidth: '500px',
    maxHeight: '80vh',
    overflow: 'auto',
    position: 'relative',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#f3f4f6',
      color: '#333'
    }
  }
}; 