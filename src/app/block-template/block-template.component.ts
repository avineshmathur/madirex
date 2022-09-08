import { Component } from '@angular/core';
@Component({
  styles: [`
    :host {
      color: #fff;
    }
  `],
  template: `
    <div class="block-ui-template">
      <div class="preloader">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </div>
    </div>
  `,
})
export class BlockTemplateComponent {
  constructor() {}
}