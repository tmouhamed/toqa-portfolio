import React from 'react'
import './skillsPage.css'
import skills from './skills.json'

const getImageUrl = (path) => {
    return new URL(`./${path}`, import.meta.url).href;
};

const SkillsPage = () => {
    return (
        <section className='skills'>
            <h1 className='skillsTitle'>Always Developing my Skills</h1>
            <div className='scroller'>
                <div> {
                    skills.map((skill, id) => {
                        return(
                            <div>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                            </div>
                    )
                    })
                }
                </div>
            </div>
        </section>
    )
}
export default SkillsPage