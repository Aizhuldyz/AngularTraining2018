import { Component, SkipSelf, Optional, Inject, Host } from '@angular/core';

import { CartService } from '../cart/services/cart.service';
import { ConfigOptionsService } from '../services/config-options.service';
import { ConstantsService } from '../services/constants.service';
import { LocalStorageService } from '../services/local-storage.service';
import { GeneratorFactory, Random_N } from '../services/random-generator.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

const constants = new ConstantsService();

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'demo-app',
    templateUrl: './demo.component.html',
    providers: [{provide: LocalStorageService, useClass: LocalStorageService},
    {provide: ConstantsService, useValue: constants},
    {provide: Random_N, useFactory: GeneratorFactory(7)},
    ConfigOptionsService ]
})
export class DemoComponent implements OnInit {
    cartData: string;
    randomText: string;
    applicationInfo: object;
    localStorage: string;
    constructor(@SkipSelf() private cartService: CartService,
                @Host() @Inject(Random_N) private random_n: any,
                private constantService: ConstantsService,
                @Optional() private localStorageService: LocalStorageService) {}

    ngOnInit() {
        this.cartData = this.cartService ? 'Cart is available! ' : 'Cart is not available';
        this.randomText = this.random_n;  
        this.applicationInfo = this.constantService.getConstantInfo();
        if (this.localStorageService) { 
            this.localStorageService.setItem('need', 'money');
            this.localStorage = this.localStorageService.getItem('need');
        }
    }
}