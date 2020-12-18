import React from 'react';

const divStyle = {
    backgroundColor: 'blue',
    textAlign: "center"
}

const h2Style = {
    fontSize: '15px',
    color: 'red',
    textAlign: 'center'
}

const Viewer = ({ title, intro, main, ending, signature }) => {
    return (
        <div style={divStyle}>
            <h2 style={h2Style}>{title}</h2>
            <h3>{intro}</h3>
            <p>{main}</p>
            <p>{ending}</p>
            <h3>{signature}</h3>

        </div>
    )
}

export default Viewer