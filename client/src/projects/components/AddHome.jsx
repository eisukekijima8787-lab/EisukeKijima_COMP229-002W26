/*import React, { useState } from 'react';
import Home from '../../projects/Home'
//import aboutPicture3 from '../../assets/aboutPicture3.jpg'

export default function AddHome() {
  const [home, setHome] = useState({ 
    id: '', 
    title: '', 
    completion: '', 
    description: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHome((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Saved\nTitle: ${Home.title}');
    // ここにバックエンド（3000番）へ送る処理をあとで書きます
  };

  return (
    <div style={{ padding: '20px', border: '2px solid blue', margin: '20px 0', backgroundColor: 'white', color: 'red' }}>
        <h1>Home</h1>
                <img src={Home} alt="Japanese Life" style={{width: '5%', borderRadius: '5px'}} />
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>ID: </label><br />
          <input type="text" name="id" value={Home.id} onChange={handleChange} placeholder="011" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Project Title: </label><br />
          <input type="text" name="title" value={project.title} onChange={handleChange} placeholder="Mountain" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Completion (%): </label><br />
          <input type="text" name="completion" value={Home.completion} onChange={handleChange} placeholder="例: 100" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Description: </label><br />
          <textarea name="description" value={Home.description} onChange={handleChange} placeholder="詳細を入力..." />
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ff6600', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add Home
        </button>
      </form>

      <hr />
      <h4>プレビュー確認用:</h4>
      <p><strong>入力中のタイトル:</strong> {Home.title}</p>
    </div>
  );
}*/