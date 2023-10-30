import { injectable } from  '@angular/core'
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './ppost.model';
import { map, catchError, tap } from 'rxjs/operators'
import {subject, throwError} from 'rxjs'


@injectable{providedIn:'root'}


constructor(private http: HttpClient){

}

export class PostService{

  error =new Subject <string>





  createAndStorePost(title:string, content:string){
    cosnt postData= Post={title:title, content:content}
    this.http
    .post<{name:string}>(
      'https://ng-complete-guide-aa868-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      }
      ).subscribe(responseData =>{
        console.log(responseData)
      },this.error.next(error.message)  }
  }
  fetchPosts(){
    const searchParams=new HttpParams()
    searchParams=searchParams.append('print', 'pretty')
    searchParams=searchParams.append('custom', 'key')
    return this.http
    .get<{[key:string]: Post}>('https://ng-complete-guide-aa868-default-rtdb.firebaseio.com/posts.json',
  {
    headers: new HttpHeaders ({ "custom-header" : 'hello'}),
    params: searchParams
  })


    .pipe(
      map((responseData => {
      const postsArray: Post[] =[]
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {

          postsArray.push({ ...responseData[key], id: key})
        }
      }
      return postsArray
    }),
    catchError(errorRest =>{
      return  throwError(errorRes)
    })

      // this.isFetching=false
      // this.loadedPosts=posts
    })
  }
  deletePosts(){
    return this.http.delete('https://ng-complete-guide-aa868-default-rtdb.firebaseio.com/posts.json')
    {
      observe:'events'
    }
  }.pipe(tap(event => {
    if(event.type===HttpEventType.Sent){
      
    }
     if (event.type ===HttpEventType.Response)
     {
      console.log(event.body)
     }
  })
)
}

}
