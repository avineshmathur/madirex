﻿import { Component, ComponentRef, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI, BlockUIService } from 'ng-block-ui';
import { Config }from './constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    @BlockUI() blockUI: NgBlockUI;
    @BlockUI('block-element') elementBlockUI: NgBlockUI;
    defaultMessage: string = 'Default Message...';
    timeout: number = Config.BLOCK_UI_TIMEOUT_SECONDS;
    blockInstances = ['block-element', 'block-element-2', 'block-element-3'];
    constructor(
        private blockUIService: BlockUIService
    ) {
    }
    blockMain(message: string) {
        this.blockUI.start(message);
        setTimeout((blockUI) => {
            this.blockUI.stop();
        }, this.timeout);
    }

    blockElement() {
        this.elementBlockUI.start();
        setTimeout((blockUI) => {
          this.elementBlockUI.stop();
        }, this.timeout);
    }

    blockAllElements() {
        this.blockUIService.start(this.blockInstances, 'Loading All');
        setTimeout((blockUI) => {
          this.blockUIService.stop(this.blockInstances);
        }, this.timeout);
    }

    blockUpdate() {
        let messages: string[] = ['Logining In', 'Loading Settings', 'Loading Widgets'],
          i = 0,
          interval: any;

        this.elementBlockUI.start('Welcome');

        interval = setInterval(() => {
          this.elementBlockUI.update(messages[i]);
          i++;

          if (i > messages.length) {
            this.elementBlockUI.stop();
            clearInterval(interval);
          }
        }, Config.BLOCK_UI_UPDATE_TIMEOUT_SECONDS);
    }

    ngOnInit() {
    }
}
