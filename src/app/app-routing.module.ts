import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentFormComponent} from './student-form/student-form.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component'

const routes: Routes = [
  { 
    path: 'acknowledgement', 
    component: AcknowledgementComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
