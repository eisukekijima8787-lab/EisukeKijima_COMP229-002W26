import React from 'react';

const ListUser = () => {
  // 📝 本来はデータベースから取ってくるデータを、仮でここに置いておきます（Read）
  const users = [
    { id: 1, name: 'User A', progress: '80%' }
  ];

  return (
    <div style={{ border: '2px solid blue', padding: '15px', marginTop: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>📁 User List</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Read user</p>

      <ul style={{ listStyleType: 'none', paddingLeft: '5px' }}>
        {users.map(aboutUs => (
          <li key={aboutUs.id} style={{ padding: '8px 0', borderBottom: '1px solid #ddd', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
            <span>{aboutUs.name}</span>
            <span style={{ color: 'brown' }}>Progress: {aboutUs.progress}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
