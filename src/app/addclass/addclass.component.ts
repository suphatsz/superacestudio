import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-addclass',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './addclass.component.html',
  styleUrl: './addclass.component.css'
})
export class AddclassComponent {
  selectedPayment: string = '';
  imageSrc: string | ArrayBuffer | null = null;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSrc = reader.result as string | ArrayBuffer;
      };

      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  }

  // onSubmit() {
  //   if (this.selectedPayment === 'bank' && this.imageSrc) {
  //     this.captureAndDownload();
  //   } else {
  //     console.log('Please select a payment method and upload a file if required.');
  //   }
  // }

  // captureAndDownload() {
  //   const captureElement = document.getElementById('capture-area');
  //   if (captureElement) {
  //     html2canvas(captureElement, {
  //       scale: 4, // Increase the scale for higher resolution
  //       useCORS: true // Handle cross-origin images
  //     }).then(canvas => {
  //       const dataURL = canvas.toDataURL('image/png');
  //       this.downloadImage(dataURL, 'booking-confirmation.png');
  //     }).catch(error => {
  //       console.error('Error capturing screenshot:', error);
  //     });
  //   }
  // }

  downloadImage(dataURL: string, filename: string) {
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = filename;
    link.click();
  }
}