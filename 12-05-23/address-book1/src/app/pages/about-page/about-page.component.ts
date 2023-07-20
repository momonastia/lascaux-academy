import { Component, OnInit } from '@angular/core';
import { from, merge, EMPTY, empty, combineLatest, concat} from 'rxjs';
import { catchError, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  /* Объединение двух Observable */

  source1 = from([1, 2, 3, 4, 5]);
  source2 = from(['A', 'B', 'C', 'D', 'E']);
  mergedValues: any[] = [];

  merged = merge(this.source1,this.source2).subscribe
    (value => {
      console.log(value);
      this.mergedValues.push(value)
    });

  /* Комбинация с определенной логикой */

  source3 = from([1, 2, 3, 4, 5]);
  source4 = from(['A', 'B', 'C', 'D', 'E']);

  combined = combineLatest([this.source3, this.source4])
  .subscribe
  (([number, letter]) => console.log(number, letter));

  /* Фильтрация */

  numbers = from([1, 2, 3, 4, 5]);

 /*  ngOnInit() {
    this.numbers.pipe(
      filter(number => number % 2 === 0)
    ).subscribe(value => console.log("Фильтрация четных чисел", value))

  } */

  /* Трансформация данных */

  numbersToTransform = from([1, 2, 3, 4, 5]);

  /* Обработка ошибок */

  numbersForErrorHandle = from([1, 2, 3, 4, 5]);

  /* Конкатенация потоков */

  numbers1$ = from([1, 2, 3]);
  numbers2$ = from([4, 5, 6]);

  concated$ = concat(this.numbers1$, this.numbers2$)
  .subscribe
  ((value) => console.log("Конкатенация потоков", value));

  /* Фильтрация и трансформация массива объектов */

  users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Mike', age: 22 },
    { id: 4, name: 'Emily', age: 28 },
  ];

  users$ = from(this.users)




  ngOnInit() {

    this.numbers.pipe(
      filter(number => number % 2 === 0)
    ).subscribe(value => console.log("Фильтрация четных чисел", value))

    this.numbersToTransform.pipe(
      map(number => number * 2)
    ).subscribe(value => console.log("Трансформация чисел", value))

    this.numbersForErrorHandle.pipe(
      map(number => {
        if (number === 3) {
           throw new Error ("Error occurred");
          }
        return number;
         }
        ),
      catchError(error => {
         console.log('Error:', error.message);
         return EMPTY;
        })
      ).subscribe(value => console.log(value));

    this.users$.pipe(
      filter(user => user.age > 25),
      map (user => user.name)
    ).subscribe(user => console.log(user))

  }
}
