import { NgModule, enableProdMode }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing,
         appRoutingProviders } from './components/app/app.routing';

import { AppComponent }       from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
   	 	routing
	],
	declarations: [
		AppComponent,
		HomeComponent
	],
	providers: [
		appRoutingProviders	
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
