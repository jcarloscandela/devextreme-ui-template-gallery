import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserService extends BaseService<User> {
  entity: string = 'User';
}
