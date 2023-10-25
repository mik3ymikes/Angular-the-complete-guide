import {PipeTransform, Pipe} from '@angular/core'

@Pipe ({
  name:'sort'
  pure:false

})

export class SortPipe implements PipeTransform{
  transform(value:any, propName:string): any{

      return value.sort((a, b) => {
        if(a[propName] > b[prpoName]){
          return 1
          }
          else{
            return -1
          }
        }
      })
    }
  }
