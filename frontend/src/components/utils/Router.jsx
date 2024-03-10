import React from 'react'
import { Routes,Route} from 'react-router-dom';
import { HomePage } from '../HomePage';
import { ListUser } from '../ListUser';
import { Error } from '../Error';
import { AddJobListing } from '../addcomponents/AddJobListing';
import { AddUser } from '../addcomponents/AddUser';
import { ListEmployee } from '../ListEmployee';
import { AddEmployer } from '../addcomponents/AddEmployer';
import { ListJobApplication } from '../ListJobApplication';
import { AddJobApplications } from '../addcomponents/AddJobApplication';
import { ListJobListing } from '../ListJobListing';
import { ListJobSeeker } from '../ListJobSeeker';
import { AddJobSeeker } from '../addcomponents/AddJobSeeker';
import { ListResume } from '../ListResume';
import { AddResume } from '../addcomponents/AddResume';
import LoginSignup from '../LoginSignup/LoginSignup';
import { BrowseJobs } from '../BrowseJobs';
import { JobSeekers } from '../JobSeekers';

export const Router = () => {
  return (
    <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/user' element={<ListUser/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/addUser' element={<AddUser/>}/>
            <Route path="/update/:id" element={<AddUser/>}/>
            <Route path='/listEmployee' element={<ListEmployee/>}/>
            <Route path='/employer' element={<ListEmployee/>}/>
            <Route path='/employee/update/:id' element={<AddEmployer/>}/> 
            <Route path='/addEmployer' element={<AddEmployer/>}/>
            <Route path='/listJobApplication' element={<ListJobApplication/>}/>
            <Route path='/jobApplication' element={<ListJobApplication/>}/>
            <Route path='/addJobApplication' element={<AddJobApplications/>}/>
            <Route path='/jobApplication/update/:id' element={<AddJobApplications/>}/>
            <Route path='/listJobListing' element={<ListJobListing/>}/>
            <Route path='/jobListing' element={<ListJobListing/>}/>
            <Route path='/addJobListing' element={<AddJobListing/>}/>
            <Route path='/jobListing/update/:id' element={<AddJobListing/>}/>
            <Route path='/listJobSeeker' element={<ListJobSeeker/>}/>
            <Route path='/jobSeeker' element={<ListJobSeeker/>}/>
            <Route path='/addJobSeeker' element={<AddJobSeeker/>}/>
            <Route path='/jobSeeker/update/:id' element={<AddJobSeeker/>}/>
            <Route path='/listResume' element={<ListResume/>}/>
            <Route path='/Resume' element={<ListResume/>}/>
            <Route path='/addResume' element={<AddResume/>}/>
            <Route path='/resume/update/:id' element={<AddResume/>}/>
            <Route path='/signin' element={<LoginSignup/>}/>
            <Route path='/BrowseJobs' element={<BrowseJobs/>}/>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/browseJobSeekers' element={<JobSeekers/>}/>
          </Routes>
  )
}