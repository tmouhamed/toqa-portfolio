import React from "react"
import data from '../../assets/data/index.json'
import './projectsPage.css'

const ProjectsPage = () => {
    return (
        <section className='projects_container'>
            <h2 className="projects_title">Projects</h2>
            <div className="projects_cards">
                    {data?.projects?.map((project, index) => (
                        <div className="project_card" key={project.id}>
                            <img className="project_img" src={project.src} alt={project.name}/>
                            <h3 className="project_card_title">{project.name}</h3>
                            <p className="project_card_description">{project.description}</p>
                            <ul className="project_card_skills">{project?.skills.map((skill, index) => {
                                return (<li className="skills_list">{skill}</li>)
                            })}</ul>
                        </div>
                    ))
                    }
            </div>
        </section>
    )
}
export default ProjectsPage