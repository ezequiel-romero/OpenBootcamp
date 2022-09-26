import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.interface';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(contacto: IContact, ...args: unknown[]): string {
    return `${contacto.firstName} ${contacto.lastName}`
  }

}
