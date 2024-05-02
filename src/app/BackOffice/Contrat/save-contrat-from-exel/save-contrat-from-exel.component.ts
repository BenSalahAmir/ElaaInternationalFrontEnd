import { Component } from '@angular/core';
import { ContratService } from '../../../Services/contrat.service';

@Component({
  selector: 'app-save-contrat-from-exel',
  templateUrl: './save-contrat-from-exel.component.html',
  styleUrl: './save-contrat-from-exel.component.css'
})
export class SaveContratFromExelComponent {
  constructor(private contratService: ContratService) { }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.contratService.saveContratsFromExcel(file).subscribe(
        () => {
          console.log('File uploaded successfully');
          // Optionally, you can handle success message or further actions here
        },
        error => {
          console.error('Error uploading file:', error);
          // Optionally, you can handle error message or further actions here
        }
      );
    }
  }



}
