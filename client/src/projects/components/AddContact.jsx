import React, { useState } from 'react';

const AddContact = () => {
  const [contactName, setContactName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactName) {
      alert('Please enter the contact');
      return;
    }
    
    alert('「${contactName}」 was successfully added');
    setContactName(''); // 入力欄を空にする
  };

  return (
    <div style={{ border: '2px solid orange', padding: '15px', marginTop: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>➕ Add New Contact</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Create contact</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Untitled" 
          value={contactName}
          onChange={(e) => setContactName(e.target.value)} // 文字が打たれたら記憶する
          style={{ padding: '8px', flex: '1', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' }}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;