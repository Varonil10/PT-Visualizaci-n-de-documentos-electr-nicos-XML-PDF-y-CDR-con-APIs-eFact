import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { DocumentViewerComponent } from './documents/document-viewer.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'documents', component: DocumentViewerComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
