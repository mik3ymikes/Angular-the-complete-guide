import {PipeTransform, Pipe} from '@angular/core'

@Pipe ({
  name:'shorten'
  pure:false
})

export class FilterPipe implements PipeTransform{
  transform(value:any, filterString:string, propName:string): any{
    if (value.lenght ===0  || filterString=== ''){
      return value
    }
    const resultArray=[]
    for (const item of value){
      if (item[propName]===filterString){
        resultArray.push(item)
      }
    }
    return resultArray
  }

}


