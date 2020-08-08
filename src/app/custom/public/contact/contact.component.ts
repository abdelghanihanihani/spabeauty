import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: any = 35.8283141;
  longitude: any = 10.5478419;
  zoom: any = 8;

  constructor() {
  }

  ngOnInit() {
  }

}
