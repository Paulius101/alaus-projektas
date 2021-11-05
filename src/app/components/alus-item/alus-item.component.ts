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
import { MessagesService } from 'src/app/services/messages.service';
import { NotificationType } from 'src/app/model/notification';

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
  constructor(private messagesService:MessagesService ) {
    this.onItemAdded = new EventEmitter < void > ();
    this.onItemRemoved = new EventEmitter < void > ();
  }

  ngOnInit(): void {}


  public postMessageForAddedFavorite():void {
this.messagesService.postMessage({
  message: "Alus įtrauktas į mėgstamiausių sąrašą!",
  type: NotificationType.Success
})
  }

  public postMessageForRemovedFavorite():void {
    this.messagesService.postMessage({
  message: "Alus pašalintas iš mėgstamiausių sąrašo!",
  type: NotificationType.Error
})
  }
}
