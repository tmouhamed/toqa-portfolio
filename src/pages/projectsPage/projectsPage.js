import React from "react"
import data from '../../assets/data/index.json'
import './projectsPage.css'
import {Link} from "react-scroll";
import link from '../../assets/link.png'

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <section className='projects_container'>
                <h2 className="projects_heading">Projects</h2>
                <div className="projects_cards">
                        {data?.projects?.map((project, index) => (
                            <div className="project_card" key={project.id}>
                                <img className="project_img" src={project.src} alt={project.name}/>
                                <h3 className="project_card_title">{project.name}</h3>
                                <p className="project_card_description">{project.description}</p>
                                <ul className="project_card_skills">{project?.skills.map((skill, index) => {
                                    return (
                                        <Link href={skill.link}>
                                            <li className="skills_list">{skill}</li>
                                        </Link>)
                                })}</ul>
                                <div className="card_overlay">
                                    <a href={project.link} target="_blank"><img src={link} className="overlay_img" alt={"link"}/></a>
                                </div>
                            </div>
                        ))
                        }
                </div>
            </section>
        </div>
    )
}
export default ProjectsPage