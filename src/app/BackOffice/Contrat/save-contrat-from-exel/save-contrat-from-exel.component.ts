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
          alert('Fichier téléchargé avec succès'); // Display success message in alert
          // Optionally, you can handle success message or further actions here
        },
        error => {
          alert('Erreur lors du téléchargement du fichier : ' + error); // Display error message in alert
          // Optionally, you can handle error message or further actions here
        }
      );
    }
  }
}
