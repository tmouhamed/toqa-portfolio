import React from 'react'
import './skillsPage.css'
import data from '../../assets/data/index.json'

const SkillsPage = () => {
    return (
        <section id="skills" className='skills'>
            <div className="skills_container">
                <h2 className="skills_heading">My Skills</h2>
                <div className="skills_container_cards">
                    {data?.skills?.map((skill, index) => (
                        <div key={index} className="skills_container_card">
                            <div className="skills_container_img">
                                <img src={skill.src} alt={skill.title}/>
                            </div>
                            <h5>{skill.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SkillsPage