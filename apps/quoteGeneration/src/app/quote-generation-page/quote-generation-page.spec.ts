import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteGenerationPage } from './quote-generation-page';

describe('QuoteGenerationPage', () => {
  let component: QuoteGenerationPage;
  let fixture: ComponentFixture<QuoteGenerationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteGenerationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
