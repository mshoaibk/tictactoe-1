import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection: signalR.HubConnection;
  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('http://localhost:5041/mailHub',{
    skipNegotiation:true,
    transport: signalR.HttpTransportType.WebSockets
    }).build();
    this.startSignalRConnection();

    //this functions is called from backend
    this.hubConnection.on('ReceiveGameReq', (GameID: any,opponantUserId:any) => {
   //notifay current user about game req send by someone
    });
    this.hubConnection.on('GameReqStatusNotification', (gameId:any ,GameStatus:any, aponanName:any,aponanUserId:any) => {
     // accept ---> navigation to gamebord
     // rejact --> notifay that req is rejacted
       });
    this.hubConnection.on('opponentMove', (board:any,playerName:any) => {
     //push that move to game arry
       });
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
   openNewPage(): void {

    const brwserInfo = navigator.userAgent;
    this.startSignalRConnection();
    // console.log('User-Agent:', userAgent);
    if (this.hubConnection.state === 'Connected') {
      this.hubConnection.invoke('OpenNewPage', this.userID.toString(), this.userName ,brwserInfo.toString()).catch((error) => {
        console.error('Error JoinPrivateChat:', error);
      });
    } else {
      console.error('SignalR connection is not in the "Connected" state.');
    }
  }
  leavePage(): void {

    const brwserInfo = navigator.userAgent;
    // console.log('User-Agent:', userAgent);
    this.hubConnection.invoke('LeavePage',this.userID.toString());
  }
  logOut(){
    const brwserInfo = navigator.userAgent;
    // console.log('User-Agent:', userAgent);
    if (this.hubConnection.state === 'Connected') {
      this.hubConnection.invoke('LeaveApplication', this.userID.toString(), brwserInfo.toString()).catch((error) => {
        console.error('Error JoinPrivateChat:', error);
      });
    } else {
      console.error('SignalR connection is not in the "Connected" state.');
    }
    this.userContextService.logout(); // this is removing current user data
    this.router.navigateByUrl('/');
  }
  //snd req for game
  sendReqForGame(ToUserId:any){
    this.hubConnection.invoke('CreateGameBoard',this.userID.toString(), FromUserName, ToUserId); //fromname is current logedin user
  }
  AcceptOrReject(GameId:any,Status:any){
    this.hubConnection.invoke('AcceptOrReject', GameId, Status)
  }
  myGameMove(board:any,playerName:any,CUrrentUserid:any,OpponantUserId:any){
    this.hubConnection.invoke('GameMove', board, playerName,CUrrentUserid,OpponantUserId)
  }
  
}
