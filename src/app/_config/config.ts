import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {
    // private url = 'http://localhost:5000';
    private url = 'http://core.kenabrus.pl';
    private config: { [key: string]: string };
    constructor() {
        this.config = {
          authentication: this.url + '/api/Authentication/',
          product: this.url + '/api/product/',
          rental: this.url + '/api/rental/',
          users: this.url + '/api/users/'
        };
    }
    get setting(): { [key: string]: string } {
        return this.config;
    }

    get(key: any) {
        return this.config[key];
    }
}