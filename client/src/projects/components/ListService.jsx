import React from 'react';

const ListService = () => {
  // 📝 本来はデータベースから取ってくるデータを、仮でここに置いておきます（Read）
  const service = [
    { id: 1, name: 'Service A', progress: '80%' }
  ];

  return (
    <div style={{ border: '2px solid blue', padding: '15px', marginTop: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>📁 Service List</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Read service</p>

      <ul style={{ listStyleType: 'none', paddingLeft: '5px' }}>
        {service.map(services => (
          <li key={services.id} style={{ padding: '8px 0', borderBottom: '1px solid #ddd', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
            <span>{services.name}</span>
            <span style={{ color: 'brown' }}>Progress: {services.progress}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListService;
