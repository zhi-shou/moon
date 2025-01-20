export const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },

  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },

  card: {
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  },

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  },

  icon: {
    fontSize: '24px',
    marginRight: '12px'
  },

  moduleTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'white',
    margin: 0
  },

  itemsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px'
  },

  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '12px',
    borderRadius: '8px',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },

  itemName: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
    margin: '0 0 4px 0'
  },

  itemDesc: {
    fontSize: '14px',
    color: '#666',
    margin: 0
  }
};
