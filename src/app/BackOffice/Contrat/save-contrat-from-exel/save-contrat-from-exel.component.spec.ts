import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveContratFromExelComponent } from './save-contrat-from-exel.component';

describe('SaveContratFromExelComponent', () => {
  let component: SaveContratFromExelComponent;
  let fixture: ComponentFixture<SaveContratFromExelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveContratFromExelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveContratFromExelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
