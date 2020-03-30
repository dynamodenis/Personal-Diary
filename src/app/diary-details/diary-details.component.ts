import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Diary } from  '../diary';

@Component({
  selector: 'app-diary-details',
  templateUrl: './diary-details.component.html',
  styleUrls: ['./diary-details.component.css']
})
export class DiaryDetailsComponent implements OnInit {
  @Input() diary:Diary;
  @Output() isDelete= new EventEmitter<boolean>();
 
  diaryDelete(complete:boolean){
    this.isDelete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
