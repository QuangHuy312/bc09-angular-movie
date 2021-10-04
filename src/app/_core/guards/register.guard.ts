import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/auth/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class RegisterGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true cho phép rời khỏi route
    const isDirty = component.checkDirTyForm();
    // form đã thay đổi hiển thị thông báo lên cho user
    if (isDirty) {
      return window.confirm('Bạn có chắc muốn rời khỏi ...');
    }
    // form chưa bị thay đổi  => cho phép rời khỏi
    return true;
  }
}
