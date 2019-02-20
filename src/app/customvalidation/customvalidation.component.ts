import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-customvalidation',
  templateUrl: './customvalidation.component.html',
  styleUrls: ['./customvalidation.component.scss']
})
export class CustomvalidationComponent implements OnInit {

  @Input() errorMsg : string;
  @Input() displayError : boolean;
  constructor() { }

  ngOnInit() {
  }
}
