/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-projects";
import ProjectForm from "./ProjectForm";
import ProjectModel from "../../datasource/projectModel";

const AddProject = () => {
    //const navigate = useNavigate();
    const [project, setProject] = useState(new ProjectModel());
    const [project, setProject] = useState({id: '', title: '', completion: '', description: ''});
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((formData) => ({ ...formData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting project: " + project);

        create(project)
            .then((res) => {
                if (res.success) {
                    alert(res.message + " Id:" + res.data.id);
                    navigate("/projects");
                }
                else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            })
    }

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add a Project</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ProjectForm
                        project={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddProject;*/




/*import React from 'react';
export default function AddProject() {
  return <h1 style={{color: 'red', backgroundColor: 'yellow'}}>hello world</h1>;
}*/









/*import React, { useState } from 'react';
import Project from '../../projects/project'
//import aboutPicture3 from '../../assets/aboutPicture3.jpg'

export default function AddProject() {
  const [project, setProject] = useState({ 
    id: '', 
    title: '', 
    completion: '', 
    description: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Saved\nTitle: ${project.title}');
    // ここにバックエンド（3000番）へ送る処理をあとで書きます
  };

  return (
    <div style={{ padding: '20px', border: '2px solid blue', margin: '20px 0', backgroundColor: 'white', color: 'red' }}>
        <h1>Project #1</h1>
                <img src={Project} alt="Japanese Life" style={{width: '5%', borderRadius: '5px'}} />
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>ID: </label><br />
          <input type="text" name="id" value={project.id} onChange={handleChange} placeholder="011" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Project Title: </label><br />
          <input type="text" name="title" value={project.title} onChange={handleChange} placeholder="Mountain" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Completion (%): </label><br />
          <input type="text" name="completion" value={project.completion} onChange={handleChange} placeholder="例: 100" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Description: </label><br />
          <textarea name="description" value={project.description} onChange={handleChange} placeholder="詳細を入力..." />
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ff6600', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add Project
        </button>
      </form>

      <hr />
      <h4>プレビュー確認用:</h4>
      <p><strong>入力中のタイトル:</strong> {project.title}</p>
    </div>
  );
}*/









import React, { useState } from 'react';
import { create } from '../../datasource/api-projects';

const AddProject = () => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName) {
      alert('Please enter the valid projects');
      return;
    }

    // 153行目 return; のすぐ下に追加
const newProject = { name: projectName }; // サーバーが期待する名前でオブジェクトを作る

create(newProject)
  .then((res) => {
    // サーバーへの送信が成功してからアラートを出す
    alert(`${projectName} was successfully added!`);
    setProjectName(''); // 入力欄を空にする
    navigate("/projects"); // プロジェクト一覧ページへ遷移
  }).catch((err) => {
    console.error("送信エラー:", err);
    alert("Failed to save project. Please try again.");
  });
    
    //alert(`${projectName} was successfully added!`);
    //setProjectName(''); // 入力欄を空にする
  };

  return (
    <div style={{ border: '2px solid orange', padding: '15px', marginTop: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>➕ Add New Project</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Project #1</p>
      <p style={{ color: 'gray', fontSize: '25px' }}>Project #2</p>
      <p style={{ color: 'gray', fontSize: '25px' }}>Project #3</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Untitled" 
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)} // 文字が打たれたら記憶する
          style={{ padding: '8px', flex: '1', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' }}>
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;