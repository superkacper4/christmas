import React, { useContext } from "react";
import styled from 'styled-components';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import Viewer from './Viewer'

import Button from '../components/Button'

import DataContext from '../context/DataContext'

const StyledPDF = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

const PDF = () => {
    const dataContext = useContext(DataContext)
    const print = (e) => {
        e.preventDefault();
        window.scroll(0, 0);
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
        <StyledPDF>
            <Viewer
                title={dataContext.contextData.title}
                intro={dataContext.contextData.intro}
                main={dataContext.contextData.main}
                ending={dataContext.contextData.ending}
                signature={dataContext.contextData.signature}
            />
            <div name="CodeSandbox" />
            <h2>Zapisz list! {"\u2728"}</h2>
            <Button onClick={print}>Pobierz</Button>
        </StyledPDF>
    );
}

export default PDF