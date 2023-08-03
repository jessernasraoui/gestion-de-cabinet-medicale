import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent {




imprimer(){
  const invoiceContentElement=document.getElementById('content') as HTMLElement;
  html2canvas(invoiceContentElement,{}).then(canvas=>{
    // is convert the canvas into base64 string url
    const imgData=canvas.toDataURL('image/png');
    // page width
    const pageWidth=210;
    const pageHeight=297;
    // calcuate the image actual height to fit with canvas and pdf
    const height=canvas.height*pageWidth/canvas.width;
    // initialize the PDF
    const pdf=new jsPDF("p","mm","a4");
    // add the image into pdf
    pdf.addImage(imgData,'PNG',0,0,pageWidth,height);

    pdf.save('ordonance.pdf');
  })
}
}
