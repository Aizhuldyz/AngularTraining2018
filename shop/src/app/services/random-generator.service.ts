import { InjectionToken } from '@angular/core';

export const Random_N = new InjectionToken<any[]>('random_n');

export function GeneratorFactory(length: number) {
    return function(): any[] {
        const radnom_text = [];
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            radnom_text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
        }
            return radnom_text;
    };
}