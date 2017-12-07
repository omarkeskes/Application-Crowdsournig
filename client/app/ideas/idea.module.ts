import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {MomentModule} from 'angular2-moment';
import { FormsModule } from '@angular/forms';

import { IdeaListComponent } from './idea-list.component';
import { IdeaDetailComponent } from './idea-detail.component';
import { IdeaNewComponent } from './idea-new.component';
import { HistoriqueIdeaComponent } from './historique-idea.component';

import { IdeaService } from './idea.service';

@NgModule({
  imports:      [  BrowserModule,MomentModule,FormsModule,
     RouterModule.forRoot
     ([
      { path: 'ideas', component: IdeaListComponent },
      { path: 'idea/:id',component: IdeaDetailComponent},
      { path: 'new',component: IdeaNewComponent},
      { path: 'historique',component: HistoriqueIdeaComponent}
    ])
  ],
  
  declarations: [
    IdeaListComponent,
    IdeaDetailComponent,
    IdeaNewComponent,
    HistoriqueIdeaComponent
  ],

  providers:[IdeaService]
})


export class IdeaModule { }