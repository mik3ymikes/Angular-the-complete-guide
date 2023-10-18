import { Component, OnDestroy, OnInit } from '@angular/core';

import {interval , Subsription, Observable} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private firstObsSubscription:Subsription
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription=interval(period 1000).subscribe (next: count =>{
    //   console.log(count)
    // })

    const cutomIntevalObservable=Observable.create(observer =>{
      setInterval(handler:() =>{
        let count=0
        observer.next(count);
        if (count ==2){
          observer.complete()
        }
        if(count>3 {
          observer.next(count){
            observer.error(new Error( message:'Count is greater than 3'))
          }
        })
        count++
      }, timeout: 1000)
    })
  }

  this.firstObsSubscription=customIntervalObserbale.subscribe (data =>{
    console.log(data)
  } , error => {
    alert(error.message)
    console.log(error) , () => {
      console.log('completed')
    }
  })
  ngONDestroy() void{
    this.firstObsSubscription
  }

}
