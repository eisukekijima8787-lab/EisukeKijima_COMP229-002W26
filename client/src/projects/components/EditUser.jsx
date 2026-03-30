/*import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { update, readOne } from "../../datasource/api-users";
import UserForm from "./UserForm";
import UserModel from "../../datasource/userModel";

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(new UserModel());
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        readOne(id)
            .then((res) => {
                if (res.success) {
                    setUser(new UserModel(
                        res.data.id,
                        res.data.title,
                        res.data.completion,
                        res.data.description,
                    ))
                } else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            })
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((formData) => ({ ...formData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting aboutUs: " + user);

        update(user, id)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
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
                    <h1>Edit a User</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <UserForm
                        aboutUs={aboutUs}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditUser;*/









import React, { useState } from 'react';

const EditUser = () => {
  // 📝 編集する文字を記憶するState
  const [editName, setEditName] = useState('User A');

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editName) {
      alert('Enter the valid user');
      return;
    }
    alert('Successfully edited to「${editName}」（Ready to connect to the API)');
  };

  return (
    <div style={{ border: '2px solid blue', padding: '15px', marginTop: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h3 style={{ color: 'black', marginTop: 0 }}>📝 Edit User</h3>
      <p style={{ color: 'gray', fontSize: '25px' }}>Update user</p>

      <form onSubmit={handleUpdate} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <label style={{ color: 'black' }}>User name: </label>
        <input 
          type="text" 
          value={editName}
          onChange={(e) => setEditName(e.target.value)} // 文字が打たれたら記憶を更新
          style={{ padding: '8px', flex: '1', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
        <button type="submit" style={{ backgroundColor: 'orange', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;