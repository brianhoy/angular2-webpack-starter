import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
	selector: 'app',
	directives: [NavbarComponent],
	template: `
<h1> App </h1>
<navbar></navbar>
<router-outlet></router-outlet>
`
})
export class AppComponent {
	constructor() { }

}