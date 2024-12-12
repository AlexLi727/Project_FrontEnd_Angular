import { TestBed } from '@angular/core/testing';

import { ListNursesService } from './list-nurses.service';

describe('ListNursesService', () => {
  let service: ListNursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListNursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
