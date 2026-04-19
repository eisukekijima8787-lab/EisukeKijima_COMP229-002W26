import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './projects/Home'
import About from './projects/aboutUs'
import Contact from './projects/contact'
import Project from './projects/project'
import Layout from './projects/Layout'
import Services from './projects/services'
import NotFound from './projects/NotFound'
import ListProject from './projects/components/ListProject'
import AddProject from './projects/components/AddProject'
import EditProject from './projects/components/EditProject'
import ListUser from './projects/components/ListUser'
import AddUser from './projects/components/AddUser'
import EditUser from './projects/components/EditUser'
import ListService from './projects/components/ListService'
import AddService from './projects/components/AddService'
import EditService from './projects/components/EditService'
import ListContact from './projects/components/ListContact'
import AddContact from './projects/components/AddContact'
import EditContact from './projects/components/EditContact'
import Signup from './projects/auth/SignUp'
import Signin from './projects/auth/SignIn'
import PrivateRoute from './projects/auth/privateRoute'

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/aboutUs" element={<About />} />
                <Route exact path="/components" element={<Project />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/users/signin" element={<Signin />} />
                <Route exact path="/users/signup" element={<Signup />} />
                <Route exact path="/projects" element={
                    <PrivateRoute>
                        <ListProject />
                    </PrivateRoute>} />
                <Route path="project/add" element={
                    <PrivateRoute>
                        <AddProject />
                    </PrivateRoute>} />
                <Route exact path="/project/edit/:id" element={<EditProject />} />
                <Route path="*" element={<NotFound />} />
                
                <Route exact path="/aboutUs/list" element={
                    <PrivateRoute>
                        <ListUser />
                    </PrivateRoute>} />
                <Route path="aboutUs/add" element={
                    <PrivateRoute>
                        <AddUser />
                    </PrivateRoute>} />
                <Route exact path="/aboutUs/edit/:id" element={<EditUser />} />
                <Route path="*" element={<NotFound />} />

                <Route exact path="/services/list" element={
                    <PrivateRoute>
                        <ListService />
                    </PrivateRoute>} />
                <Route path="services/add" element={
                    <PrivateRoute>
                        <AddService />
                    </PrivateRoute>} />
                <Route exact path="/services/edit/:id" element={<EditService />} />
                <Route path="*" element={<NotFound />} />

                <Route exact path="/contact/list" element={
                    <PrivateRoute>
                        <ListContact />
                    </PrivateRoute>} />
                <Route path="contact/add" element={
                    <PrivateRoute>
                        <AddContact />
                    </PrivateRoute>} />
                <Route exact path="/contact/edit/:id" element={<EditContact />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    )
}

export default MainRouter