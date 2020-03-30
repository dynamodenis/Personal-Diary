import { Component, OnInit, Input } from '@angular/core';
import { Diary} from '../diary';

@Component({
  selector: 'app-diary-content',
  templateUrl: './diary-content.component.html',
  styleUrls: ['./diary-content.component.css']
})
export class DiaryContentComponent implements OnInit {
  diaries:Diary[]=[
  ];

  addNewDiary(newDiary){
    let diaryLength=this.diaries.length;
    newDiary.id=diaryLength++;
    newDiary.date = new Date(newDiary.date)
    this.diaries.push(newDiary)
    console.log(this.diaries)
    this.diaries.values();
  }

  // Toggels through the details when SHOW DETAILS BUTTON IS Clicked
  showDetails(index){
    this.diaries[index].showDescription=!this.diaries[index].showDescription;
  }
  
  diaryDelete(isDelete,index){
    if(isDelete){
      let deleteIt=confirm(`Are you sure you want to delete ${this.diaries[index].title}`);
      if(deleteIt){
        this.diaries.splice(index,1);
      }
    }
  }
  constructor() { }

  ngOnInit(){
  }

}
