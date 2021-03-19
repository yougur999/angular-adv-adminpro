import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios();

    // const promesa = new Promise( (resolve, reject) => {

    //   if (true) {
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promesa.then( (mensaje) => {
    //   console.log(mensaje);
    // });

    // console.log('Fin del init');



  }

  getUsuarios() {
    fetch('https://reqres.in/api/users')
      .then(resp => {
        resp.json().then(body => console.log(body))
      });

  }
}
