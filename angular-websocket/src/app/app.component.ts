import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-websocket';

  constructor(private webSocketService: WebSocketService){
    
  }

  ngOnInit(){
    let cont=1;
    this.webSocketService.listen('data').subscribe((data)=>{
      console.log(data, cont);
      cont++;
    })
    setInterval(() => {
    this.webSocketService.emit('data',"Hello world");
    },2000);
  }

}
