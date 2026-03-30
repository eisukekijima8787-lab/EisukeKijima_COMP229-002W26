import React from 'react';

// 📝 ListProjectから1つ分のデータ（project）を受け取って表示する部品です
const ListServiceItem = ({ services }) => {
  // まだデータが届いていない場合の安全装置
  if (!services) return null;

  return (
    <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>📁 {services.name}</span>
        <span style={{ marginLeft: '10px', color: 'brown' }}>Progress: {services.progress}</span>
      </div>
      <div>
        <button style={{ backgroundColor: '#1565C0', color: 'white', border: 'none', padding: '4px 8px', marginRight: '5px', cursor: 'pointer', borderRadius: '3px' }}>
          Edit
        </button>
        <button style={{ backgroundColor: '#C62828', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer', borderRadius: '3px' }}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListServiceItem;