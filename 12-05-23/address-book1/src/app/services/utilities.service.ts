import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  /* metodo per convertite la stringa in title case */
  public toTitleCaseFunction (value: string): string {
    return value.toLowerCase().replace(/^(.)|\s+(.)/g, ($1) => $1.toUpperCase());
  }

  /* metodo che prende il formato di data dall'ipotetico database e lo converte in un altro format*/
  public dateFormatFunction (dateStr: string): string {
    const formattedDate = moment(dateStr, 'YYYY-MM-DD').format('DD/MM/YYYY');
    return formattedDate;
  }

  /* metodo che controlla se entrambi parametri sono true: array esiste e la sua lunghezza e maggiore a 0 */
  public isNotEmptyArray(arr: any[]): boolean {
    return Array.isArray(arr) && arr.length > 0;
  }

}
