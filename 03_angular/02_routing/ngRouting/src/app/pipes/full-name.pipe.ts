import { Pipe, PipeTransform } from '@angular/core';
import { IRandomUser } from '../models/randomuser';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(contacto: IRandomUser, ...args: unknown[]): string {
    return `${contacto.name.title} ${contacto.name.first} ${contacto.name.last}`
  }

}
