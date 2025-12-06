import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingModal } from './voting-modal';

describe('VotingModal', () => {
  let component: VotingModal;
  let fixture: ComponentFixture<VotingModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
