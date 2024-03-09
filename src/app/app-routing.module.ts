import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './BackOffice/Public/side-bar/side-bar.component';
import { TopHeaderComponent } from './BackOffice/Public/top-header/top-header.component';
import { FooterComponent } from './BackOffice/Public/footer/footer.component';
import { DashbordComponent } from './BackOffice/dashbord/dashbord.component';
import { ListContratComponent } from './BackOffice/Contrat/list-contrat/list-contrat.component';
import { AddContratComponent } from './BackOffice/Contrat/add-contrat/add-contrat.component';
import { UpdateContratComponent } from './BackOffice/Contrat/update-contrat/update-contrat.component';

const routes: Routes = [
  {
    path:'side',
    component:SideBarComponent
  },
  {
    path:'header',
    component:TopHeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'liste',
    component:ListContratComponent
  },
  {
    path:'add',
    component:AddContratComponent
  },
  {
    path:'dashbord',
    component:DashbordComponent
  },
  {
    path:'update/:id',
    component:UpdateContratComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
