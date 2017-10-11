import {Directive, ElementRef, Renderer} from 'angular2/core'; //import Directive from core in angular2

//create the directive tage
@Directive({
    selector: '[autoGrow]', // this is what the directive is going to be attached to (host element which the directive is going to be applied to) [] means attributes
    host:{ // host is used to subscribe to events raised from this element
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective{
    
    constructor(private el:ElementRef, private renderer:Renderer){
    }
    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200'); // creating the attribute on focus
    }
    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120'); // off focus the atrubute of the item
    }

}