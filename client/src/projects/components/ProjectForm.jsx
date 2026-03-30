/*import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ProjectForm = ({ project, handleChange, handleSubmit }) => {
    const navigate = useNavigate();
    
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="hidden" name="id" value={project.id || ""} />

            <div className="form-group">
                <label htmlFor="titleTextField">Title</label>
                <input
                    id="titleTextField"
                    name="title"
                    className="form-control"
                    placeholder="Enter the title of the project"
                    value={project.title || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="CompletionTextField">Completion</label>
                <input
                    id="CompletionTextField"
                    name="completion"
                    type="date"
                    className="form-control"
                    value={project.completion ? new Date(project.completion).toISOString().split('T')[0] : ""}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="descriptionTextField">Description</label>
                <textarea
                    id="descriptionTextField"
                    name="description"
                    className="form-control"
                    placeholder="Enter the description of the project"
                    value={project.description || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <button className="btn btn-primary" type="submit">
                <i className="fas fa-edit"></i> Submit
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-warning" type="button" onClick={() => navigate(-1)} >
                <i className="fas fa-undo"></i>
                Cancel
            </button>
        </form>
    );
}

export default ProjectForm;*/







import React, { useState } from 'react';

const ProjectForm = ({ title, buttonText, onSubmitAction }) => {
  // 📝 入力された文字を記憶する引き出し（State）
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 画面のリロードを防ぐ
    
    if (!inputValue) {
      alert('Please enter valid projects');
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
      <h4 style={{ color: 'black', marginTop: 0 }}>{title || 'Project Form'}</h4>
      
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

export default ProjectForm;
