import { TestBed } from '@angular/core/testing';

import { WisePeopleResolverService } from './wise-people-resolver.service';

describe('WisePeopleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WisePeopleResolverService = TestBed.get(WisePeopleResolverService);
    expect(service).toBeTruthy();
  });
});
