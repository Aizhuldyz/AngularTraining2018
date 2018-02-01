import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[change-font]'
})
export class ChangeFontDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('change-font') fontColor: string;
    private el: HTMLElement;
    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('click') onclick() {
        this.changeFont(this.fontColor || 'blue');
    }

    private changeFont (color: string) {
        this.el.style.fontStyle.fontcolor(color);
    }

}