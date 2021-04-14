import React from 'react'
import './Experience.css';
import ExpGrid from './ExpGrid'

function Experience() {
    return (
        <div className="experience">
            <h2 className="exp_title">Découvrez les expériences</h2>
            <p className="exp__p">Des activités uniques avec des experts locaux, en personne ou en ligne</p>
            <ExpGrid />
        </div>
    )
}

export default Experience
