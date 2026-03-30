import React, { useState } from 'react';

const EditService = () => {
  // 📝 編集する文字を記憶するState
  const [editName, setEditName] = useState('Service A');

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editName) {
      alert('Enter a Service Name');
      return;
    }
    alert('Successfully edited to「${editName}」（Ready to connect to the API)');
  };

  return (
    <div style={{ border: '2px solid blue', padding: '15px', marginTop: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>📝 Edit Service (Update)</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Update service</p>

      <form onSubmit={handleUpdate} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <label style={{ color: 'black' }}>Service name: </label>
        <input 
          type="text" 
          value={editName}
          onChange={(e) => setEditName(e.target.value)} // 文字が打たれたら記憶を更新
          style={{ padding: '8px', flex: '1', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
        <button type="submit" style={{ backgroundColor: 'orange', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditService;