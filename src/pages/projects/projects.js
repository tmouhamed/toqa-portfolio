import React from "react"
import data from '../../assets/data/index.json'

const ProjectsPage = () => {
    return (
        <section className='skills'>
            <div className="main__content">
                <div className="main__content-block main__content-workblock">
                    {data.map(project => {
                        return (
                            <div className="main__content-block__col" key={data.id}>
                                <div className="main__content-block__card">
                                    <div className="main__content-block__card-imageContainer">
                                        <img className="main__content-block__card-image" src={data.photo} alt=""/>
                                    </div>
                                    <svg className="main__content-block__card-svg" viewBox="0 0 1440 320">
                                        <path fill="#fbf7de"
                                              d="M0,0L34.3,37.3C68.6,75,137,149,206,165.3C274.3,181,343,139,411,117.3C480,96,549,96,617,101.3C685.7,107,754,117,823,138.7C891.4,160,960,192,1029,218.7C1097.1,245,1166,267,1234,277.3C1302.9,288,1371,288,1406,288L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                                    </svg>
                                    <div className="main__content-block__card-content">
                                        <h2 className="main__content-block__card-content__title">{data.name}</h2>
                                        <p className="main__content-block__card-content__paragraph">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
export default ProjectsPage