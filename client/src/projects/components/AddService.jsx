import React, { useState } from 'react';

const AddService = () => {
  const [servicesName, setServiceName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!servicesName) {
      alert('Please enter the valid service');
      return;
    }
    
    alert('「${servicesName}」 was successfully added');
    setServiceName(''); // 入力欄を空にする
  };

  return (
    <div style={{ border: '2px solid orange', padding: '15px', marginTop: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>➕ Add New Service</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Create service</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Untitled" 
          value={servicesName}
          onChange={(e) => setServiceName(e.target.value)} // 文字が打たれたら記憶する
          style={{ padding: '8px', flex: '1', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' }}>
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;