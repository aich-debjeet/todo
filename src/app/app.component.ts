import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  newTask;
  items: any=[];
  
constructor(private client: HttpClient){
  
}
ngOnInit(){
  this.client.get('https://jsonplaceholder.typicode.com/todos').subscribe((res)=> {
    console.log('response', res);
    this.items = res;
  })
}
  addToList(){
    if(this.newTask == '')
    return
    else {
      let todoItem={
        title:'',
        id:'',
        userId:'',
        completed: false
      };
      todoItem.title=this.newTask;
      todoItem.id ='20';
      todoItem.userId ='20';
      todoItem.completed =false;
      this.items.push(todoItem);
      this.newTask='';
    }
  }

  deleteTolist(i){
    this.items.splice(i,1);
  }
}
