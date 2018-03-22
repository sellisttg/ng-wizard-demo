import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent }    from './start/start.component';
import { DetailsComponent }    from './details/details.component';
import { UserComponent }        from './user/user.component';
import { AddressComponent }     from './address/address.component';
import { ResultComponent }      from './result/result.component';

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'details',  component: DetailsComponent, canActivate: [WorkflowGuard] },
    // 2nd Route
    { path: 'user',  component: UserComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    // 5th Route
    { path: '',   redirectTo: '/start', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: StartComponent },
    // 7th Route
    { path: 'start',  component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}