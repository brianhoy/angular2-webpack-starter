import {Component} from '@angular/core';

@Component({
	selector: 'navbar',
	template: `
<nav>
	<div>
		<h1>Key Club</h1>
		<p>a community service organization from MTHS</p>
	</div>
	<ul>
		<li *ngFor="let link of navbarLinks">
			<a routerLink="{{link.location}}" routerLinkActive="active">{{link.text}}</a>
		</li>
	</ul>
</nav>
	`,
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	private navbarLinks: Array<{location: string, text: string}>;

	constructor() {
		this.navbarLinks = new Array<{location: string, text: string}>();
		this.navbarLinks.push({location: '/about', text: 'About'});
		this.navbarLinks.push({location: '/work', text: 'Work'});
		this.navbarLinks.push({location: '/contact', text: 'Contact'});

		this.navbarLinks.reverse();
	}
}