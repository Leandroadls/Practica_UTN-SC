import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalTitleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    let sentence = value.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
}

}
