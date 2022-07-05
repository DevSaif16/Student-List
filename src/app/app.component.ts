import { Component } from '@angular/core';
import {Name} from "./name";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'student-list';
  nameValue:string="";
  list:Name[]=[];
  tag:string="";

  ngOnInit(){
    this.list=[];
    this.nameValue="";
  }

  addName(){
    if(this.nameValue!=="")
    {
      const newItem: Name={
        id:Date.now(),
        tag:this.tag,
        value:this.nameValue,
        isDone:false
      };
      this.list.push(newItem);
    }
    this.nameValue="";
  }

  deleteName(id:Number){
    this.list=this.list.filter(name=>name.id!==id);
  }
}
