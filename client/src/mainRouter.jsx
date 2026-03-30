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

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Project />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/users/signin" element={<Signin />} />
                <Route exact path="/users/signup" element={<Signup />} />
                <Route exact path="/project/list" element={<ListProject />} />
                <Route exact path="/project/add" element={<AddProject />} />
                <Route exact path="/project/edit/:id" element={<EditProject />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    )
}
export default MainRouter