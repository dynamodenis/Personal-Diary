import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Diary } from  '../diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {
  @Input() diary:Diary;
  newDiary= new Diary(0,new Date(),'','');
  @Output() addDiary=new EventEmitter<any>();

submitForm(){
  this.addDiary.emit(this.newDiary);
}
  constructor() { }

  ngOnInit() {
  }
  // submitName(value){
  //   console.log(value);
  // }

}
