import React, { useState } from 'react';

const ContactForm = ({ title, buttonText, onSubmitAction }) => {
  // 📝 入力された文字を記憶する引き出し（State）
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 画面のリロードを防ぐ
    
    if (!inputValue) {
      alert('文字を入力してください！');
      return;
    }

    // ボタンが押されたら、親（App.jsxなど）に文字を渡して合図を送る
    if (onSubmitAction) {
      onSubmitAction(inputValue);
    }
    
    setInputValue(''); // 送信後に入力欄を空にする
  };

  return (
    <div style={{ border: '2px solid green', padding: '15px', backgroundColor: '#fff', borderRadius: '5px', marginTop: '10px' }}>
      <h4 style={{ color: 'black', marginTop: 0 }}>{title || 'Contact Form'}</h4>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Untitled" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // 文字が打たれたら記憶する
          style={{ padding: '8px', flex: '1', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
        <button type="submit" style={{ backgroundColor: 'purple', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' }}>
          {buttonText || 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;