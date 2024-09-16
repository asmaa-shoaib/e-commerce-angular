import { Component, ContentChild } from '@angular/core';
import { ZippyContentDirective } from '../../Directives/zippy-content-directive.directive';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;

}
