import { Directive, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[availability-check]'
})
export class AvailabilityCheckDirective implements OnInit {
    @Input() isAvailable: boolean;

    @HostBinding('disabled') isdisabled: boolean;
    @HostBinding('style.color') color: string;

    @HostListener('mouseenter', ['$event']) OnMouseEnter() {
        this.color = 'yellow';
    }

    @HostListener('mouseleave', ['$event']) OnMouseLeave() {
        this.color = 'white';
    }


    ngOnInit() {
        this.isdisabled = !this.isAvailable; 
        this.color = this.isAvailable ? 'white' : 'red';
    }
}