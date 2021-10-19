import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
    //   {
    //     path: '',
    //     loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    // },
      {
          path: 'home',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
        {
          path: 'profile',
          loadChildren: () => import('../profileModule/profile/profile.module').then( m => m.ProfilePageModule)
        },
        {
          path: 'customer-allocation',
          loadChildren: () => import('../dealerModule/customer-allocation/customer-allocation.module').then( m => m.CustomerAllocationPageModule)
        },
        {
          path: 'orders',
          loadChildren: () => import('../orderModule/orders/orders.module').then( m => m.OrdersPageModule)
        },
        
        
        // {
        //   path: 'communication-list',
        //   loadChildren: () => import('../communicationModule/communication-list/communication-list.module').then( m => m.CommunicationListPageModule)
        // },
      // {
      //   path: 'tab1',
      //   loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      // },
      // {
      //   path: 'tab2',
      //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      // {
      //   path: 'tab4',
      //   loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      // },
      // {
      //   path: 'tab5',
      //   loadChildren: () => import('../tab5/tab5.module').then( m => m.Tab5PageModule)
      // },
      // {
      //   path: '',
      //   redirectTo: '/tabs/home',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/app/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}