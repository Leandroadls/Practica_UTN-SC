import { Directive, ElementRef, HostListener, OnInit,  } from "@angular/core";

@Directive({
	selector: "[hide]",
})
export class HideDirective implements OnInit{

	htmlElement: ElementRef;

	constructor(private element: ElementRef) {  
		this.htmlElement = element;
	}
	
	ngOnInit(): void {}
	
	@HostListener('mouseenter') onmouseenter(event: Event){
		this.htmlElement.nativeElement.style.backgroundColor = "red";
		this.htmlElement.nativeElement.style.color = "white";
	}
	
	@HostListener('mouseleave') onmouseleave(event: Event){
		this.htmlElement.nativeElement.style.visibility = "hidden";
	}
}
