import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersPageComponent } from './characters-page.component';
import { provideHttpClient } from '@angular/common/http';

describe('CharactersPageComponent', () => {
  let component: CharactersPageComponent;
  let fixture: ComponentFixture<CharactersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [CharactersPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
