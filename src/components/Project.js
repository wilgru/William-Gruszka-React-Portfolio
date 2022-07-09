import project_3 from '../project_3.png';

const tagLoop = (tags) => {
    let els = [];

    for (let i = 0; i < tags.length; i++) {
        els.push(<p className='plaque plaque-tag'>{tags[i]}</p>)
    }

    return els
}

const Project = (props) => {
    return (
        <div className="project-card">
            <img className="shadow" src={props.image}></img>
            <section>
                {tagLoop(props.tags)}
            </section>
            <p>{props.title}</p>
        </div>
    )
};

export default Project;