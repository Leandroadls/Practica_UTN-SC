import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateRouteGuard } from "./validate-route.guard";

describe('ValidateRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateRouteGuard]
    });
  });

  it('should ...', inject([ValidateRouteGuard], (guard: ValidateRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
