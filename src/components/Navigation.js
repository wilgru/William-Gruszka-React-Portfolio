const Navigation = () => {
    return (
        <nav className="App-nav">
            <a className="plaque plaque-btn" href="#who-am-i-card">Who Am I</a>
            <a className="plaque plaque-btn" href="#work-card">Work</a>
            <a className="plaque plaque-btn" href="#touch-base-card">Touch Base</a>
            <a className="plaque plaque-btn" href={process.env.PUBLIC_URL + '/William_Gruszka_Resume.pdf'} target="_blank">Resume</a>
        </nav>
    )
};

export default Navigation;