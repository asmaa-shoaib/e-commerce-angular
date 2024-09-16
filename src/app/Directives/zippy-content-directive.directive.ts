import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appZippyContentDirective]',
  standalone: true
})
export class ZippyContentDirective {

  constructor(public templateRef: TemplateRef<unknown>) {}
}
