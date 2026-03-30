import React from 'react';

const ListContact = () => {
  // 📝 本来はデータベースから取ってくるデータを、仮でここに置いておきます（Read）
  const contacts = [
    { id: 1, name: 'Contact A', progress: '80%' }
  ];

  return (
    <div style={{ border: '2px solid blue', padding: '15px', marginTop: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>📁 Contact List</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Read contact</p>

      <ul style={{ listStyleType: 'none', paddingLeft: '5px' }}>
        {contacts.map(contact => (
          <li key={contact.id} style={{ padding: '8px 0', borderBottom: '1px solid #ddd', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
            <span>{contact.name}</span>
            <span style={{ color: 'brown' }}>Progress: {contact.progress}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListContact;