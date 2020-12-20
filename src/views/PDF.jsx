import React, { useContext } from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import Viewer from './Viewer'

import DataContext from '../context/DataContext'


const PDF = () => {
    const dataContext = useContext(DataContext)
    const print = (e) => {
        e.preventDefault();
        html2canvas(document.getElementById("viewer"))
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "mm", "a4");
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('download.pdf');
            });

    };

    return (
        <div>
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