import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

describe('ShellComponent', () => {
	let component: ShellComponent;
	let fixture: ComponentFixture<ShellComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule.withRoutes([])],
			declarations: [ShellComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShellComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should have a router outlet', () => {
		let de = fixture.debugElement.query(By.directive(RouterOutlet));

		expect(de).not.toBeNull();
	});
});
