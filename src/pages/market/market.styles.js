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

  postButton: {
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
    padding: '0 10px',
    overflowX: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },

  category: {
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

  itemGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    padding: '0 10px'
  },

  itemCard: {
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

  imageContainer: {
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

  condition: {
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

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: '#f3f4f6'
  },

  itemContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },

  itemTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    marginBottom: '12px'
  },

  price: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#f43f5e'
  },

  currency: {
    fontSize: '14px',
    marginRight: '2px'
  },

  originalPrice: {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'line-through'
  },

  description: {
    fontSize: '13px',
    color: '#666',
    lineHeight: 1.4,
    marginBottom: '12px',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  },

  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '12px'
  },

  tag: {
    padding: '4px 8px',
    backgroundColor: '#f3f4f6',
    borderRadius: '12px',
    fontSize: '12px',
    color: '#666'
  },

  sellerInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },

  sellerLeft: {
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

  sellerText: {
    display: 'flex',
    flexDirection: 'column'
  },

  sellerName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333'
  },

  sellerRoom: {
    fontSize: '12px',
    color: '#666'
  },

  rating: {
    fontSize: '14px',
    color: '#666'
  },

  itemFooter: {
    borderTop: '1px solid #f3f4f6',
    paddingTop: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  itemMeta: {
    display: 'flex',
    gap: '12px',
    fontSize: '12px',
    color: '#666'
  },

  time: {
    color: '#999'
  },

  actions: {
    display: 'flex',
    gap: '8px'
  },

  likeButton: {
    padding: '6px 12px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    borderRadius: '16px',
    fontSize: '13px',
    color: '#666',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#e5e7eb'
    }
  },

  contactButton: {
    padding: '6px 12px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    fontSize: '13px',
    cursor: 'pointer',
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
    overflow: 'auto',
    position: 'relative'
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