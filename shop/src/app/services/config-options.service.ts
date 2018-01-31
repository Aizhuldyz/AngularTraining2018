import { Injectable } from '@angular/core';
import { LoginInfo } from './models/login-info.model';
@Injectable()
export class ConfigOptionsService {
    loginInfo: LoginInfo;

    saveLoginInfo(login: string, email: string, id: number): void {
        this.loginInfo = new LoginInfo(id, login, email);
    }
}