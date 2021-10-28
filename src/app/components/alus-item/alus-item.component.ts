import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  Alus
} from "../../model/alus";

@Component({
  selector: 'app-alus-item[alus]',
  templateUrl: './alus-item.component.html',
  styleUrls: ['./alus-item.component.scss']
})
export class AlusItemComponent implements OnInit {
  @Input() public alus!: Alus;
  @Output()
  onItemAdded!: EventEmitter < void > ;

  @Output()
  onItemRemoved!: EventEmitter < void > ;
  constructor() {}

  ngOnInit(): void {}

}
