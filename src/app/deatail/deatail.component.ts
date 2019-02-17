import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-deatail',
  templateUrl: './deatail.component.html',
  styleUrls: ['./deatail.component.scss']
})
export class DeatailComponent implements OnInit {
 @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
