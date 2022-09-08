import { Component, OnInit } from '@angular/core';
import { Config } from '../../../constant';
@Component({
  selector: 'superadmin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	currentDate : Date = new Date();
	appTitle: string = Config.APP_TITLE;
	constructor() { }
  	ngOnInit(): void {
  	}
}
