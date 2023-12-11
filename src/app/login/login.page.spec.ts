import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../autenticacion.service';
import { GuardiaGuard } from '../guardia.guard';
import { LoginPage } from './login.page';
import { Storage } from '@ionic/storage';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let guardiaGuardSpy: jasmine.SpyObj<GuardiaGuard>;

  beforeEach(async(() => {
    const authServiceSpyObj = jasmine.createSpyObj('AuthService', ['getUsuarios']);
    const guardiaGuardSpyObj = jasmine.createSpyObj('GuardiaGuard', ['setAuthenticationStatus']);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule], 
      providers: [
        { provide: AuthService, useValue: authServiceSpyObj },
        { provide: GuardiaGuard, useValue: guardiaGuardSpyObj },
        Storage,
      ],
    }).compileComponents();

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    guardiaGuardSpy = TestBed.inject(GuardiaGuard) as jasmine.SpyObj<GuardiaGuard>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
