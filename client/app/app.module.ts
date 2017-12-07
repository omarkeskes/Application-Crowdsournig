import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http' ;
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MomentModule} from 'angular2-moment';

//Services
import {LoginService} from './home/login.service'
//COmponent
import {AppComponent} from './app.component';
import { HomeComponent} from './home/home.component';
import { AuthComponent } from './home/auth.component';
//Modules
import { IdeaModule } from './ideas/idea.module';
import { CommunityModule } from './community/community.module';


@NgModule({
  imports:      [ BrowserModule,
        HttpModule,
        FormsModule,
        MomentModule,
        RouterModule.forRoot([  
          { path: '', component: HomeComponent },
           { path: 'auth',component: AuthComponent}
    ]),
    IdeaModule,
    CommunityModule
    
 ],

  declarations: [AppComponent,
        HomeComponent,
        AuthComponent
  ],
  
  providers:[LoginService],

  bootstrap: [AppComponent]
})
export class AppModule { }
