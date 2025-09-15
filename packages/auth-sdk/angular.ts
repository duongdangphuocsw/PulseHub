import { Injectable } from '@angular/core';
import { createAuthClient } from './index';

const authClient = createAuthClient({});

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUser() {
    return authClient.getUser();
  }

  getAccessToken() {
    return authClient.getAccessToken();
  }
}
