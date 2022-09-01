import React from 'react'
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interest"


function Skills() {
    return (
        <>
        <div className='skills'>
        <h2 className='h2'>Skills</h2>
        <Skill title='BOOTSTRAP' rating='4' />
        <Skill title='PYTHON' rating='3' />
        <Skill title='PHP' rating='3' />
        <Skill title='LARAVEL' rating='2' />
        <Skill title='JAVASCRIPT' rating='3' />
        <Skill title='REACT' rating='3' />
        <Skill title='NODE' rating='2' />

    </div>
    <div className='skills'>
        <h2 className='h2'>Language</h2>
        <Skill title='ENGLISH' rating='3' />
        <Skill title='DUTCH' rating='2' />
        <Skill title='SPAN' rating='2' />
        <Skill title='FRENCH' rating='5' />
    </div>
    <Interests />
    </>

    )   
}

export default Skills

