import { Component, HostListener } from '@angular/core';
import { SignalrService } from 'src/app/Services/signalr.service';
import * as signalR from '@microsoft/signalr';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  private hubConnection: signalR.HubConnection;
  constructor(private signalRService: SignalrService){
   
     //SignalR
     this.hubConnection = new signalR.HubConnectionBuilder()
     .withUrl('http://localhost:5261/mailHub', {
       skipNegotiation: true,
       transport: signalR.HttpTransportType.WebSockets
     })
     .build();
  }
  async ngOnInit(): Promise<void> {

    // Call the API service function when the app component initializes
    try {
      await this.startSignalRConnection();
      this.signalRService.openNewPage();
      console.log("openNewPage is called");
    } catch (error) {
      console.error('Error starting SignalR connection:', error);
      // Handle connection startup errors here
    }
  }
  async startSignalRConnection(): Promise<void> {
    if (this.hubConnection.state === 'Disconnected') {
      await this.hubConnection
        .start()
        .then(() => {
          console.log('SignalR connection started successfully.');
          // Implement any logic you need after a successful connection
        })
        .catch((error) => {
          console.error('Error starting SignalR connection:', error);
          throw error; // Propagate the error
        });
    } else {
      console.warn('SignalR connection is already in a connected or connecting state.');
    }
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    this.signalRService.leavePage();
    console.log("page is closed");
  }
}
