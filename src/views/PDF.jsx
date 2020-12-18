import React from "react";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const colstyle = {
    width: "30%"
};
const tableStyle = {
    width: "100%"
};
const Prints = () => (
    <div>
        <h3>Time & Materials Statement of Work (SOW)</h3>
        <h4>General Information</h4>
    </div>
);

const print = (e) => {
    e.preventDefault()
    const string = renderToString(<Prints />);
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.fromHTML(string);
    pdf.save("pdf");
};

const PDF = () => (
    <div style={styles}>
        <div name="CodeSandbox" />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <button onClick={print}>print</button>
    </div>
);

export default PDF