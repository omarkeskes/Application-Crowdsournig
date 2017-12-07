import { NgModule }      from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EnseignantListComponent } from './enseignant-list.component';
import { EtudiantListComponent } from './etudiant-list.component';
import { EntrepriseListComponent } from './entreprise-list.component';
import { EnseignantProfilComponent } from './enseignant-profil.component';
import { EtudiantProfilComponent } from './etudiant-profil.component';
import { ProfilComponent } from './etd-profil.component';
import { EnsProfilComponent } from './ens-profil.component';
import { EtudiantFilterPipe } from './etudiant-filter.pipe';
import { EnseignantFilterPipe } from './enseignant-filter.pipe';
import { EntrepriseFilterPipe } from './entreprise-filter.pipe';

import { EntrepriseService } from './entreprise.service';
import { EnseignantService } from './enseignant.service';
import { EtudiantService } from './etudiant.service';

@NgModule({
  imports:      [  
        CommonModule,
        FormsModule,
     RouterModule.forChild([
       { path: 'etudiants', component: EtudiantListComponent },
       { path: 'enseignants', component: EnseignantListComponent },
       { path: 'entreprises', component: EntrepriseListComponent },
       { path: 'etudiant/:id', component: EtudiantProfilComponent },
       { path: 'enseignant/:id', component: EnseignantProfilComponent },
       { path: 'profil/:id', component: ProfilComponent },
       { path: 'mon_profil/:id', component: EnsProfilComponent },
    ])
  ],
  
  declarations: [
    EnseignantListComponent,
    EtudiantListComponent,
    EntrepriseListComponent,
    EtudiantProfilComponent,
    EnseignantProfilComponent,
    ProfilComponent,
    EnseignantFilterPipe,
    EtudiantFilterPipe,
    EntrepriseFilterPipe,
    EnsProfilComponent
  ],
  
    providers:[
     EtudiantService,
     EnseignantService,
     EntrepriseService]
})


export class CommunityModule { }