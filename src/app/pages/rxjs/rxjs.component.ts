import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() { 

      const obs$ = new Observable(observer => {

        let i = -1;

        const intervalo = setInterval( () => {
          i++;
          observer.next(i);

          if (i === 4) {
            clearInterval(intervalo);
            observer.complete();
          }

        }, 1000);
        
      });

      obs$.subscribe(valor => console.log('Subs:', valor),
        error => console.warn('Error:', error),
        () => console.info('Obs terminado'));
  }

  ngOnInit(): void {
  }

}
