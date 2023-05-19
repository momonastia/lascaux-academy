import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public toTitleCaseFunction (value: string): string {
    console.log("ehii toTitleCaseFunction funziona!");
    return value.toLowerCase().replace(/^(.)|\s+(.)/g, ($1) => $1.toUpperCase());
  }

  public dateFormatFunction (dateStr: string): string {
    const now = moment(); // Создание объекта Moment, представляющего текущую дату и время
    const formattedDate = moment(dateStr, 'YYYY-MM-DD').format('DD/MM/YYYY'); 
    return formattedDate; // Вывод отформатированной даты в консоль

  }
}
