import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { ContatosComponent } from '../../contatos/contatos.component';
import { EmpresasComponent } from '../../empresas/empresas.component';
import { ProdutosComponent } from '../../produtos/produtos.component';
import { TarefasComponent } from '../../tarefas/tarefas.component';
import { VendasComponent } from '../../vendas/vendas.component';


export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'contatos', component: ContatosComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'tarefas', component: TarefasComponent},
    { path: 'empresas', component: EmpresasComponent},
    { path: 'vendas', component: VendasComponent},
];
