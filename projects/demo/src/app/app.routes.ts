import { Routes } from '@angular/router';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';

export const routes: Routes = [
    { path: 'one', component: PageOneComponent },
    { path: 'tow', component: PageTwoComponent },
    { path: 'three', component: PageThreeComponent },
    { path: '', redirectTo: '/one', pathMatch: 'full' }
]
