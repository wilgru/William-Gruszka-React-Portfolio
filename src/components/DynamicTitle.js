const dynamicTitle = (props) => {
    const titles = [
        "",
        "Who Am I", 
        "Work", 
        "Touch Base"
    ];

    return (
        <div id="dynamic-title">
            <h1>{titles[props.titleIndex]}</h1>
        </div>
    )
};

export default dynamicTitle;