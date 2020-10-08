import { MaterialModule } from './../../material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

describe('MenuComponent', () => {
	let component: MenuComponent;
	let fixture: ComponentFixture<MenuComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MaterialModule],
			declarations: [MenuComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// it('should have a link to events page', () => {
	// 	let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
	// 	console.log(debugElements);
	// 	let index = debugElements.findIndex((de) => de.properties['href'] == '/events');
	// 	expect(index).toBeGreaterThan(-1);
	// });
});
