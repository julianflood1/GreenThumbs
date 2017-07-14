import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'ageSort',
  pure: false
})
export class AgeSortPipe implements PipeTransform {

  transform(input: Member[], age){
    var output: Member[] = [];
    if(age === "underAge") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 60) {
          output.push(input[i]);
        }
      }
    return output;
  } else if (age === "overAge"){
    for (var i = 0; i < input.length; i++) {
      if (input[i].age > 61) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}
}
