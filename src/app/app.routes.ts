import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExp } from './components/directive-exp/directive-exp';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { TemForm } from './components/tem-form/tem-form';
import { ReactiveFormEx } from './components/reactive-form-ex/reactive-form-ex';
import { SignalBasic } from './components/signal-basic/signal-basic';
import { SignalFormEx } from './components/signal-form-ex/signal-form-ex';
import { GetAPIEx } from './components/get-apiex/get-apiex';
import { ClientCrud } from './components/client-crud/client-crud';
import { PipeEx } from './components/pipe-ex/pipe-ex';
import { LifeCycle } from './components/life-cycle/life-cycle';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { authGuard } from './guards/auth-guard';
import { NgTemContainer } from './components/ng-tem-container/ng-tem-container';
import { RxjsEx } from './components/rxjs-ex/rxjs-ex';
 
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'admin',
        component: Layout,
        children: [
            {
                path: 'variables',
                component: Variables
            },
            {
                path: 'databinding',
                component: DataBinding,
                canActivate: [authGuard]
        
            },
            {
                path: 'directives',
                component: DirectiveExp
            },
             {
                path: 'ng-tem-container',
                component: NgTemContainer
            },
             {
                path: 'rxjs-ex',
                component: RxjsEx
            },
            {
                path: 'control-flow',
                component: ControlFlow
            },
            {
                path: 'lifecycle',
                component: LifeCycle
            },
            {
                path: 'template-form',
                component: TemForm
            },
            {
                path: 'clinets',
                component: ClientCrud,
                outlet:'royter1'
            },
            {
                path: 'get-api',
                component: GetAPIEx,
                outlet:'royter2'
            },
            {
                path: 'reactive-form',
                component: ReactiveFormEx
            },
            {
                path: 'signal-basic',
                component: SignalBasic
            },
            {
                path: 'signal-form',
                component: SignalFormEx
            },
            {
                path: 'pipe',
                component: PipeEx
            },
           

        ]
    },

    {
        path: '**',
        component: NotFound
    }
];
