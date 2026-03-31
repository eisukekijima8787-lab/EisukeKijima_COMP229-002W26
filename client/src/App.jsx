/*import React from 'react'
import Home from './projects/Home';
import User from './projects/aboutUs';
import Project from './projects/project';
import Service from './projects/services';
import Contact from './projects/contact';
//import AddHome from './projects/components/AddHome';
import AddProject from './projects/components/AddProject';
/*import AddUser from './projects/components/AddUser';
import AddService from './projects/components/AddService';
import AddContact from './projects/components/AddContact';
//import EditProject from './projects/components/EditProject';
import EditUser from './projects/components/EditUser';
import EditService from './projects/components/EditService';
import EditContact from './projects/components/EditContact';

function App() {
  return (
    <div>
      <Home />
      <User />
      <Project />
      <Service />
      <Contact />

      <hr />
      
      <AddProject />
      <AddUser />
      <AddService />
      <AddContact />

      <hr />

      <EditProject />
      <EditUser />
      <EditService />
      <EditContact />
    </div>
  );
}

export default App;*/












import React from 'react';
import Home from './projects/Home';
import User from './projects/aboutus';
import Project from './projects/project';
import Service from './projects/services';
import Contact from './projects/contact';

// 👇 先生のフォルダから安全にファイルを読み込みます
/*import AddHome from './projects/components/AddHome';
import ListHome from './projects/components/ListHome';
import EditHome from './projects/components/EditHome';
import ListHomeItem from './projects/components/ListHomeItem';
import HomeForm from './projects/components/HomeForm';*/

import AddProject from './projects/components/AddProject';
import ListProject from './projects/components/ListProject';
import EditProject from './projects/components/EditProject';
import ListProjectItem from './projects/components/ListProjectItem';
import ProjectForm from './projects/components/ProjectForm';

import AddUser from './projects/components/AddUser';
import ListUser from './projects/components/ListUser';
import EditUser from './projects/components/EditUser';
import ListUserItem from './projects/components/ListUserItem';
import UserForm from './projects/components/UserForm';

import AddService from './projects/components/AddService';
import ListService from './projects/components/ListService';
import EditService from './projects/components/EditService';
import ListServiceItem from './projects/components/ListServiceItem';
import ServiceForm from './projects/components/ServiceForm';

import AddContact from './projects/components/AddContact';
import ListContact from './projects/components/ListContact';
import EditContact from './projects/components/EditContact';
import ListContactItem from './projects/components/ListContactItem';
import ContactForm from './projects/components/ContactForm';

function App() {
  const sampleData = {id: 1, name: 'poop', progress: '100%'};
  return (
    <div>
      <hr style={{ margin: '40px 0', border: '2px solid #ccc' }} />
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', color: 'black' }}>
        <h2 style={{ color: 'black', marginTop: 0 }}>🛠️ CRUD 画面のテスト表示</h2>

      <Home />
      <User />
      <Project />
      <Service />
      <Contact />
        
        <AddProject />
        <ListProject />
        <EditProject />
        <ListProjectItem project={sampleData} />
        <ProjectForm />
        <AddUser />
        <ListUser />
        <EditUser />
        <ListUserItem aboutUs={sampleData} />
        <UserForm />
        <AddService />
        <ListService />
        <EditService />
        <ListServiceItem services={sampleData} />
        <ServiceForm />
        <AddContact />
        <ListContact />
        <EditContact />
        <ListContactItem contact={sampleData} />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
