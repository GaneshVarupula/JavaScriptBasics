import { Directive ,Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective {
@Input() set myIf(condition:boolean){
  if(condition){
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }else{

    this.viewContainerRef.clear();
  
  }
}
  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef
  ) { }

}
