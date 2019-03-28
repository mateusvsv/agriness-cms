import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoDetalheComponent } from './artigo-detalhe.component';

describe('ArtigoDetalheComponent', () => {
  let component: ArtigoDetalheComponent;
  let fixture: ComponentFixture<ArtigoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtigoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
