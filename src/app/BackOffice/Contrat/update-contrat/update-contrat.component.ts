import { Component, OnInit } from '@angular/core';
import { ContratAssurance } from '../../../Models/ContratAssurance';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratService } from '../../../Services/contrat.service';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {
  contrat: ContratAssurance = new ContratAssurance();
  typesAssurance: string[] = ['ROUTIERE', 'Domiciliaire', 'Médicale', 'Voyage', 'Juridique'];
  selectedTypes: string[] = [];

  remorquage: boolean = false;
  expertise: boolean = false;
  reparation: boolean = false;
  plomberie: boolean = false;
  serrurier: boolean = false;
  vitrier: boolean = false;
  electrien: boolean = false;
  infirmier: boolean = false;
  laboratoire: boolean = false;
  kine: boolean = false;
  secondAvis: boolean = false;
  rapatriement: boolean = false;
  evasan: boolean = false;
  retourDomicile: boolean = false;
  billetterie: boolean = false;
  hospitalisation: boolean = false;
  avocat: boolean = false;
  constructor(
    private contratService: ContratService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contratId = this.route.snapshot.paramMap.get('id');
    if (contratId) {
      this.contratService.getContratById(contratId).subscribe(
        (data) => {
          this.contrat = data;
          this.selectedTypes = this.contrat.typeAssurance.split(',');
        //  this.setServices(); // Update services based on selected types
        },
        (error) => {
          console.error('Failed to get contrat', error);
          // Handle error
        }
      );
    }
  }
  

  submitForm(): void {
    const contratId = this.route.snapshot.paramMap.get('id');
    if (contratId) {
      // Update contrat properties based on form inputs
      this.contrat.typeAssurance = this.selectedTypes.join(',');
      this.contrat.services = this.getSelectedServices().join(',');
      
      // Then, pass the updated contrat object to the service for updating
      this.contratService.updateContrat(contratId, this.contrat).subscribe(
        (data) => {
          console.log('Contrat updated successfully', data);
          // Display success message
          alert('Contrat updated with success');
          // Redirect to /liste
          window.location.href = '/liste';
        },
        (error) => {
          console.error('Failed to update contrat', error);
        }
      );
    }
  }
  
  
  


  getSelectedServices(): string[] {
    let selectedServices: string[] = [];
    if (this.remorquage) selectedServices.push('Remorquage');
    if (this.expertise) selectedServices.push('Expertise');
    if (this.reparation) selectedServices.push('Réparation');
    if (this.plomberie) selectedServices.push('Plomberie');
    if (this.serrurier) selectedServices.push('Serrurier');
    if (this.vitrier) selectedServices.push('Vitrier');
    if (this.electrien) selectedServices.push('Électricien');
    if (this.infirmier) selectedServices.push('Infirmier');
    if (this.laboratoire) selectedServices.push('Technicien de laboratoire et d\'analyse');
    if (this.kine) selectedServices.push('Technicien de kiné');
    if (this.secondAvis) selectedServices.push('Second avis médical');
    if (this.rapatriement) selectedServices.push('Rapatriement sanitaire');
    if (this.evasan) selectedServices.push('Evasan');
    if (this.retourDomicile) selectedServices.push('Retour à domicile');
    if (this.billetterie) selectedServices.push('Billetterie');
    if (this.hospitalisation) selectedServices.push('Hospitalisation');
    if (this.avocat) selectedServices.push('Avocat');
    return selectedServices;
  }

  toggleType(type: string) {
    if (this.isSelected(type)) {
      this.selectedTypes = this.selectedTypes.filter(t => t !== type);
    } else {
      this.selectedTypes.push(type);
    }
    // Reset services when type selection changes
    this.resetServices();
  }

  isSelected(type: string): boolean {
    return this.selectedTypes.includes(type);
  }

  setServices() {
    // Reset all services
    this.resetServices();
    // Set services based on selected types
    this.selectedTypes.forEach(type => {
      switch (type) {
        case 'ROUTIERE':
          this.remorquage = true;
          this.expertise = true;
          this.reparation = true;
          break;
        case 'Domiciliaire':
          this.plomberie = true;
          this.serrurier = true;
          this.vitrier = true;
          this.electrien = true;
          break;
        case 'Médicale':
          this.infirmier = true;
          this.laboratoire = true;
          this.kine = true;
          this.secondAvis = true;
          break;
        case 'Voyage':
          this.rapatriement = true;
          this.evasan = true;
          this.retourDomicile = true;
          this.billetterie = true;
          this.hospitalisation = true;
          break;
        case 'Juridique':
          this.avocat = true;
          break;
        default:
          break;
      }
    });
  }

  resetServices() {
    this.remorquage = false;
    this.expertise = false;
    this.reparation = false;
    this.plomberie = false;
    this.serrurier = false;
    this.vitrier = false;
    this.electrien = false;
    this.infirmier = false;
    this.laboratoire = false;
    this.kine = false;
    this.secondAvis = false;
    this.rapatriement = false;
    this.evasan = false;
    this.retourDomicile = false;
    this.billetterie = false;
    this.hospitalisation = false;
    this.avocat = false;
  }
}
