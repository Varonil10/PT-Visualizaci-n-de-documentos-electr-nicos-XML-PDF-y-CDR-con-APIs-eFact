import { Component } from '@angular/core';
import { DocumentService } from './document.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent {

  ticket: string = '';

  xmlContent: string | null = null;
  pdfUrl: SafeResourceUrl | null = null;
  pdfBlob: Blob | null = null;  
  cdrContent: string | null = null;

  loading = false;
  errorMessage = '';

  constructor(private documentService: DocumentService, private sanitizer: DomSanitizer) {}

  fetchDocuments() {
    this.errorMessage = '';
    this.loading = true;

    this.xmlContent = null;
    this.pdfUrl = null;
    this.pdfBlob = null;
    this.cdrContent = null;

    this.documentService.getXML(this.ticket).subscribe({
      next: (xml) => this.xmlContent = xml,
      error: () => this.errorMessage = 'No se pudo obtener el XML.'
    });

    this.documentService.getPDF(this.ticket).subscribe({
      next: (pdf) => {
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

        console.log("PDF URL:", url);
      },
      error: () => this.errorMessage = 'No se pudo obtener el PDF.'
    });

    this.documentService.getCDR(this.ticket).subscribe({
      next: (cdr) => {
        const decoder = new TextDecoder('utf-8');
        this.cdrContent = decoder.decode(cdr);
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No se pudo obtener el CDR.';
        this.loading = false;
      }
    });
  }
}
