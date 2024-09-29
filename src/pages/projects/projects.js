import React from "react"
import data from '../../assets/data/index.json'

const ProjectsPage = () => {
    return (
        <section className='projects_container'>
            <h2 className="projects_title">Projects</h2>
            <div className="projects_main">
                    {data?.projects?.map((project, index) => (
                        <div className="" key={index}>
                            <img src={project.src} alt={project.title}/>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <ul></ul>
                        </div>
                    ))}
            </div>
        </section>
    )
}
export default ProjectsPage