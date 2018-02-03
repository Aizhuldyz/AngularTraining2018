
export class CouponService {
    genarateRandom(length: number): string { 
        let random_text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; i++) {
            random_text += (possible.charAt(Math.floor(Math.random() * possible.length)));
        }
            return random_text;
    };
}