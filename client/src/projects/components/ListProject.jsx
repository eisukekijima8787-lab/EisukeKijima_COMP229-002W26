import React from 'react';

const ListProject = () => {
  // 📝 本来はデータベースから取ってくるデータを、仮でここに置いておきます（Read）
  const projects = [
    { id: 1, name: 'Project A', progress: '80%' },
    { id: 2, name: 'Project B', progress: '50%' },
    { id: 3, name: 'Project C', progress: '10%' }
  ];

  return (
    <div style={{ border: '2px solid blue', padding: '15px', marginTop: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>📁 Project List</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Read 3 projects</p>

      <ul style={{ listStyleType: 'none', paddingLeft: '5px' }}>
        {projects.map(project => (
          <li key={project.id} style={{ padding: '8px 0', borderBottom: '1px solid #ddd', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
            <span>{project.name}</span>
            <span style={{ color: 'brown' }}>Progress: {project.progress}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProject;
