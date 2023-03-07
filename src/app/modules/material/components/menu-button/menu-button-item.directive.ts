import { Directive, TemplateRef } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Directive({ selector: '[menuButtonItem]'})
export class MenuButtonItemDirective {
  constructor(public templateRef: TemplateRef<MatButton>) { }
}