import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObuoliuSkaiciuokleComponent } from './obuoliu-skaiciuokle/obuoliu-skaiciuokle.component';
import { AComponent } from './obuoliu-skaiciuokle/a/a.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BComponent } from './obuoliu-skaiciuokle/b/b.component';
import { OruPrognozeComponent } from './oru-prognoze/oru-prognoze.component';



const appRoutes:Routes = [
  {
    path:"obuoliu-skaiciuokle",
    component:ObuoliuSkaiciuokleComponent
  },
  {
    path:"oru-prognoze",
    component:OruPrognozeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ObuoliuSkaiciuokleComponent,
    AComponent,
    BComponent,
    OruPrognozeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
