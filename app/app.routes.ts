import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path:'',
    component: TodoComponent,
    pathMatch:'full'
    },

    {
        path:'home',
    component: TodoComponent,
    pathMatch:'full'
    },
    {
        path:'about',
    component: AboutComponent,
    pathMatch:'full'
    },

];
