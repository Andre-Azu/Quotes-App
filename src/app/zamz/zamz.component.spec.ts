import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamzComponent } from './zamz.component';

describe('ZamzComponent', () => {
  let component: ZamzComponent;
  let fixture: ComponentFixture<ZamzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZamzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZamzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
