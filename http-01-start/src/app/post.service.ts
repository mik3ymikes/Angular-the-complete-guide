import { injectable } from  '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Post } from './ppost.model';
import { map } from 'rxjs/operators'


@injectable{providedIn:'root'}


constructor(private http: HttpClient){

}

export class PostService{






  createAndStorePost(title:string, content:string){
    cosnt postData= Post={title:title, content:content}
    this.http
    .post<{name:string}>(
      'https://ng-complete-guide-aa868-default-rtdb.firebaseio.com/posts.json',
      postData
      ).subscribe(responseData =>{
        console.log(responseData)
      })
  }
  fetchPosts(){
    return this.http
    .get<{[key:string]: Post}>('https://ng-complete-guide-aa868-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      map((responseData => {
      const postsArray: Post[] =[]
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {

          postsArray.push({ ...responseData[key], id: key})
        }
      }
      return postsArray
    })
    )

      // this.isFetching=false
      // this.loadedPosts=posts
    })
  }
  deletePosts(){
    return this.http.delete('https://ng-complete-guide-aa868-default-rtdb.firebaseio.com/posts.json')
  }
}
