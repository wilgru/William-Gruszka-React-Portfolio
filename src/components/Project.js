const Project = (props) => {
  const tagLoop = (tags) => {
    let els = [];

    for (let i = 0; i < tags.length; i++) {
      els.push(
        <p className='plaque plaque-tag'>{tags[i]}</p>
      )
    }
    return els
  }

  return (
    <div className="project-card">
    <div className="project-preview">
        <img className="shadow" src={props.image}></img>
        <div className="project-overlay shadow">
            <div className="overlay-btns-container">
            <a className="plaque" href={props.githubLink}>GitHub</a>
            <a className="plaque" href={props.deployedLink}>Link</a>
          </div>
        </div>
      </div>
      <section>
        {tagLoop(props.tags)}
      </section>
      <p>{props.title}</p>
    </div>
  )
};

export default Project;