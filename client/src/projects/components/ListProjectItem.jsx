/*import { Link } from "react-router-dom";
import { remove } from "../../datasource/api-projects";

const ListProjectItem = ({ project, onRemove }) => {

    const handleRemove = (id) => {
        console.log(id);
        if (confirm('Are you sure you want to delete this item?')) {
            remove(id)
                .then((res)=>{
                    if(res.success)
                    {
                        onRemove();
                    }
                    else{
                        alert(res.message);
                    }
                })
                .catch((err)=>{
                    alert(err.message);
                    console.log(err);
                })
        }
    }

    return (
        <tr >
            <td className="text-center"> {project.title || ''} </td>
            <td className="text-center"> {project.completion ? new Date(project.completion).toLocaleDateString() : ''} </td>
            <td className="text-center"> {project.description || ''} </td>
            <td className="text-center">
                <Link className="btn bg-primary btn-primary btn-sm" to={'/project/edit/' + project.id}>
                    <i className="fas fa-pencil-alt"></i>
                </Link>
            </td>
            <td className="text-center">
                <button
                    className="btn bg-danger btn-danger btn-sm"
                    onClick={() => handleRemove(project.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );
}

export default ListProjectItem;*/









import React from 'react';

// 📝 ListProjectから1つ分のデータ（project）を受け取って表示する部品です
const ListProjectItem = ({ project }) => {
  // まだデータが届いていない場合の安全装置
  if (!project) return null;

  return (
    <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>📁 {project.name}</span>
        <span style={{ marginLeft: '10px', color: 'brown' }}>Progress: {project.progress}</span>
      </div>
      <div>
        <button style={{ backgroundColor: '#1565C0', color: 'white', border: 'none', padding: '4px 8px', marginRight: '5px', cursor: 'pointer', borderRadius: '3px' }}>
          Edit
        </button>
        <button style={{ backgroundColor: '#C62828', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer', borderRadius: '3px' }}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListProjectItem;
