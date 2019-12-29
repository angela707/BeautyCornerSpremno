import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {

  constructor(private http: HttpClient) { }

  getPosts(pageNumber: number):Observable<Post[]>{
    return this.http.get<Post[]>(`http://5e02628c63d08b0014a288a2.mockapi.io/Blog?page=${pageNumber}&limit=5`)
  }
}



