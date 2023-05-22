import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

constructor(private httpClient: HttpClient) { }
baseUrl='http://localhost:3000/Editor/'

getEditor(){
return this.httpClient.get(this.baseUrl)
}

postEditor(data:any){
  return this.httpClient.post(this.baseUrl,data)
}

updateEditor(data:any,id){
  return this.httpClient.patch(this.baseUrl+id,data)
}
deleteEditor(id:any){
  return this.httpClient.delete(this.baseUrl+id)
}
}
