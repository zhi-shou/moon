export const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },

  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    margin: 0
  },

  createButton: {
    padding: '8px 20px',
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

  search: {
    marginBottom: '20px',
    maxWidth: '800px',
    margin: '0 auto 20px'
  },

  searchInput: {
    width: '100%',
    maxWidth: '100%',
    padding: '12px 20px',
    fontSize: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
    '&:focus': {
      borderColor: '#10b981'
    }
  },

  categories: {
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    padding: '10px 0',
    marginBottom: '20px',
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
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.2s ease',
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

  groupGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  },

  groupCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  },

  groupHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px'
  },

  groupIcon: {
    fontSize: '32px',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: '12px'
  },

  groupInfo: {
    flex: 1
  },

  groupName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 4px 0'
  },

  groupMeta: {
    display: 'flex',
    gap: '12px',
    color: '#666',
    fontSize: '14px'
  },

  groupDesc: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#666',
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

  nextEvent: {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '16px'
  },

  eventTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 8px 0'
  },

  eventInfo: {
    fontSize: '13px',
    color: '#666',
    '& p': {
      margin: '4px 0'
    }
  },

  recentActivity: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },

  activityIcon: {
    fontSize: '16px'
  },

  joinButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#059669'
    }
  }
}; 