/*import React, { useState } from 'react';
import User from '../../projects/aboutUs'
//import aboutPicture2 from '../assets/aboutPicture2'

export default function AddUser() {
  const [aboutUs, setUser] = useState({ 
    id: '', 
    title: '', 
    completion: '', 
    description: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Saved\nTitle: ${aboutUs.title}');
    // ここにバックエンド（3000番）へ送る処理をあとで書きます
  };

  return (
      <div style={{ padding: '20px', border: '2px solid blue', margin: '20px 0', backgroundColor: 'white', color: 'red' }}>
          <h1>AboutUs</h1>
                  <img src={User} alt="Japanese Life" style={{width: '5%', borderRadius: '5px'}} />
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>ID: </label><br />
            <input type="text" name="id" value={aboutUs.id} onChange={handleChange} placeholder="011" />
          </div>
  
          <div style={{ marginBottom: '10px' }}>
            <label>Project Title: </label><br />
            <input type="text" name="title" value={aboutUs.title} onChange={handleChange} placeholder="Mountain" />
          </div>
  
          <div style={{ marginBottom: '10px' }}>
            <label>Completion (%): </label><br />
            <input type="text" name="completion" value={aboutUs.completion} onChange={handleChange} placeholder="例: 100" />
          </div>
  
          <div style={{ marginBottom: '10px' }}>
            <label>Description: </label><br />
            <textarea name="description" value={aboutUs.description} onChange={handleChange} placeholder="詳細を入力..." />
          </div>
  
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ff6600', color: 'white', border: 'none', cursor: 'pointer' }}>
            Add User
          </button>
        </form>
  
        <hr />
        <h4>プレビュー確認用:</h4>
        <p><strong>入力中のタイトル:</strong> {aboutUs.title}</p>
      </div>
    );
}*/

import React, { useState } from 'react';

const AddUser = () => {
  const [aboutUsName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aboutUsName) {
      alert('Please enter the valid user');
      return;
    }
    
    alert('「${aboutUsName}」 was successfully added');
    setUserName(''); // 入力欄を空にする
  };

  return (
    <div style={{ border: '2px solid orange', padding: '15px', marginTop: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>➕ Add New User</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Create user</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Untitled" 
          value={aboutUsName}
          onChange={(e) => setUserName(e.target.value)} // 文字が打たれたら記憶する
          style={{ padding: '8px', flex: '1', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' }}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;