//Nuestr custom pipe
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'convertToSpaces' //es el nombre que usara para hacer referencia al pipe en el HTML
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string):string {
        return value.replace(character, ' ');
    }

}