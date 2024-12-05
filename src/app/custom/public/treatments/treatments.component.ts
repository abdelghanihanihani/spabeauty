import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {
  isModal = false;

  constructor() {
  }

  ngOnInit() {
  }

  showModal() {
    // document.getElementById('id01').style.display = 'block';
    this.isModal = true;
  }

  hideModal() {
    this.isModal = false;

  }
}
