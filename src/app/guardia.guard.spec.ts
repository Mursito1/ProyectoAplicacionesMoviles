import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GuardiaGuard } from './guardia.guard';

describe('GuardiaGuard', () => {
  let guard: GuardiaGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [GuardiaGuard],
    });

    guard = TestBed.inject(GuardiaGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if isAuthenticated is true', () => {
    guard.setAuthenticationStatus(true);

    const canActivateResult = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(canActivateResult).toBe(true);
  });

  it('should navigate to /login if isAuthenticated is false', () => {
    spyOn(router, 'navigate');

    guard.setAuthenticationStatus(false);

    const canActivateResult = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(canActivateResult).toEqual(router.navigate(['/login']));
  });

});