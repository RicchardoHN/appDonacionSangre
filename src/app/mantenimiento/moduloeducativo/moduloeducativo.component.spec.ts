import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloeducativoComponent } from './moduloeducativo.component';

describe('ModuloeducativoComponent', () => {
  let component: ModuloeducativoComponent;
  let fixture: ComponentFixture<ModuloeducativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloeducativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloeducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
