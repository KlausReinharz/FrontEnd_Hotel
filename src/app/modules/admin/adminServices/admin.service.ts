import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/auth/services/storage/user-storage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postRoomDetails(roomDto:any):Observable<any>{
    return this.http.post(BASIC_URL + "api/admin/room", roomDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getRooms(pageNumber:number):Observable<any>{
    return this.http.get(BASIC_URL + `api/admin/rooms/${pageNumber}`,{
      headers: this.createAuthorizationHeader(),
    })
  }

  /*Necisto esto para atraer los datos para el update */
  getRoomById(id:number):Observable<any>{
    return this.http.get(BASIC_URL + `api/admin/room/${id}`,{
      headers: this.createAuthorizationHeader(),
    });
  }
  /*El update */
  updateRoomDetails(id:number, roomDto:any):Observable<any>{
    return this.http.put(BASIC_URL + `api/admin/room/${id}`, roomDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  deleteRoom(roomId:number):Observable<any>{
    return this.http.delete(BASIC_URL + `api/admin/room/${roomId}`,{
      headers: this.createAuthorizationHeader(),
    })
  }






  createAuthorizationHeader(){
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer '+UserStorageService.getToken()
    )
  }
}
