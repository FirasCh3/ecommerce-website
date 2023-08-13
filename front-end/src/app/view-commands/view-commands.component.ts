import {Component, OnInit} from '@angular/core';
import {http} from "../http";

@Component({
  selector: 'app-view-commands',
  templateUrl: './view-commands.component.html',
  styleUrls: ['./view-commands.component.css']
})
export class ViewCommandsComponent implements OnInit{
  commands:any;
  ngOnInit() {
    this.Request.GetCommands().subscribe((data)=>{
      console.log(data)
      this.commands=data;
    })
  }
  constructor(private Request:http) {

  }
  DeleteCommand(CommandId:string){
    this.Request.DeleteCommand(CommandId).subscribe();
    setTimeout(()=>{
      this.ngOnInit();
    },1000/3)

  }

}
