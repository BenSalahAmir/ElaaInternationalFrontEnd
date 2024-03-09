import { Component } from '@angular/core';
import { ContratAssurance } from '../../../Models/ContratAssurance';
import { ContratService } from '../../../Services/contrat.service';

declare var $: any; // Import jQuery

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent {
  contrats: ContratAssurance[] = [];
  searchTerm: string = '';

  constructor(private contratService: ContratService) { }

  ngOnInit() {
    this.getContrats();
  }

  getContrats(): void {
    this.contratService.getAllContrats()
      .subscribe(contrats => this.contrats = contrats);
  }

  deleteContrat(id: string): void {
    // Display confirmation dialog
    const confirmDelete = confirm("Are you sure you want to delete this contract?");
  
    // If user confirms deletion, proceed with deletion
    if (confirmDelete) {
      this.contratService.deleteContrat(id)
        .subscribe(() => {
          // Remove the deleted contract from the list
          this.contrats = this.contrats.filter(contrat => contrat.id !== id);
        });
    }
  }

  searchContrat(): void {
    // Perform search using jQuery AJAX
    $.ajax({
      url: 'YOUR_SEARCH_ENDPOINT', // Replace with your actual search endpoint
      method: 'GET',
      data: { searchTerm: this.searchTerm },
      success: (data: ContratAssurance[]) => {
        this.contrats = data;
      },
      error: (error: any) => {
        console.error('Error fetching search results:', error);
      }
    });
  }
}
