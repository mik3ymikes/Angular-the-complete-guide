import {PipeTransform, Pipe} from '@angular/core'

@Pipe ({
  name:'reverse'

})

export class ReversePipe implements PipeTransform{
  transform(value:any): any{

      return value.split('').reverse().join('')
    }
  }
