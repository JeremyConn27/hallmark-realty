import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { StrategyComponent } from './strategy/strategy.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'strategy', component: StrategyComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'whats-new', component: WhatsNewComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
