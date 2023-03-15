import './App.css';
import React from 'react';
import ResumeHeader from './Components/ResumeHeader';
import ResumeBody from './Components/ResumeBody'

export default function ResumeBuilderPage(){
    return(
        <div className='App'>
        <ResumeHeader/>
        <ResumeBody/>
        </div>
    )
}