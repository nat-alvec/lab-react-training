

function BoxColor (props) {
    const divStyle = {
        "background-color" : `rgb(${props.r},${props.g},${props.b})`,
        "height": "60px",
        "text-align": "center",
        "width" : "98%"
    }

    return(
        <div className="idBoxColor" style={divStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor;