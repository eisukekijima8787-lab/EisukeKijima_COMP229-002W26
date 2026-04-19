//import { remove } from "../../datasource/api-aboutUss";
import React from 'react';
import axios from 'axios'; // 👈 これが足りなかった！
import { Link } from 'react-router-dom'; // 👈 Editで画面を飛ばすために必要

const ListaboutUsItem = ({ aboutUs }) => {
  if (!aboutUs) return null;

  return (
    <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>📁 {aboutUs.aboutUsName || aboutUs.title}</span>
        <span style={{ marginLeft: '10px', color: 'brown' }}>Status: {aboutUs.status}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* --- Editボタン: 編集画面へ飛ばす --- */}
        <Link 
          to={`/aboutUs/edit/${aboutUs._id}`} 
          style={{ backgroundColor: '#1565C0', color: 'white', border: 'none', padding: '6px 12px', marginRight: '5px', cursor: 'pointer', borderRadius: '3px', textDecoration: 'none', fontSize: '14px' }}
        >
          Edit
        </Link>

        {/* --- Deleteボタン --- */}
        <button
          className="btn btn-danger"
          style={{ marginLeft: '10px' }}
          onClick={() => {
            const token = localStorage.getItem('token'); // 👈 トークンをまず取り出す

  if (!token) {
    alert("Login session has expired. Please log in again.");
    return;
  }

  if (window.confirm("Are you sure you want to delete this service?")) {
    axios.delete(`http://localhost:3004/api/aboutUs/${aboutUs.id}`, {
      headers: { 
        // ⚠️ Bearerの後のスペース、ここを絶対に変えないでください
        'Authorization': `Bearer ${token}` 
      }
    })
    .then((res) => {
      alert("User deleted successfully!");
      window.location.reload(); 
    })
    .catch(err => {
      console.error("Detailed deletion error:", err.response);
      // 401なら「誰？」、404なら「URL間違い」
      alert(`Failed to delete user. Reason: ${err.response?.status} (${err.response?.data?.message || 'Unauthorized'})`);
              });
            }
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListServiceItem;