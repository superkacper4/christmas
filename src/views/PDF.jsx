import React, { useContext } from "react";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";

import Viewer from './Viewer'

import DataContext from '../context/DataContext'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const container = {
    width: '30vw',
    padding: '10px',
    margin: '0',
    border: '2px solid black',
    'background-color': 'red'
};
const title = {
    width: '100%',
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'red',
    fontSize: '30px'
};
const Prints = () => {
    const dataContext = useContext(DataContext)

    return (
        <div style={container}>
            <h3 style={title}>xd</h3>
            <h4>General Information</h4>
        </div>
    )
};

const PDF = () => {
    const dataContext = useContext(DataContext)
    const print = (e) => {
        e.preventDefault()
        const string = renderToString(
            <Viewer
                title={dataContext.contextData.title}
                intro={dataContext.contextData.intro}
                main={dataContext.contextData.main}
                ending={dataContext.contextData.ending}
                signature={dataContext.contextData.signature}
            />)
            ;
        const pdf = new jsPDF("p", "mm", "a4");

        pdf.fromHTML(string);
        pdf.save("pdf");
    };

    return (
        <div style={styles}>
            <Viewer
                title={dataContext.contextData.title}
                intro={dataContext.contextData.intro}
                main={dataContext.contextData.main}
                ending={dataContext.contextData.ending}
                signature={dataContext.contextData.signature}
            />
            <div name="CodeSandbox" />
            <h2>Start editing to see some magic happen {"\u2728"}</h2>
            <button onClick={print}>print</button>
        </div>
    );
}

export default PDF