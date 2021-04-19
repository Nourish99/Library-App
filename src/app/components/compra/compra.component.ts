import { Component, OnInit } from '@angular/core';
import { LibroA } from 'src/app/interfaces/LibroA';
import { SahringServiceService} from '../../services/saharing-service.service';
import { UserInfo } from '../../interfaces/UserInfo';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  public Libro1 : LibroA={
    ISBN:"", 
    title:"",
    author: "",
    content: "",
    publisher: "",
    publisher_date: "",
    pages: 0,
    language: "",
    url_download: "",
    url_read_online: "",
    cover: "",
    category: "",
  };
  // public Libro1 : LibroA={
    
  //   ISBN:"8498389267", 
  //   title:"Harry Potter y el cáliz de fuego. Vol. 4",
  //   author: "J. K Rowling",
  //   content: "a sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. Si logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.",
  //   publisher: "Penguin Random House Grupo Editorial",
  //   publisher_date: "1 febrero 2019",
  //   pages: 672,
  //   language: "Español",
  //   url_download: "Te la debo",
  //   url_read_online: "Te la debo",
  //   cover: "https://images-na.ssl-images-amazon.com/images/I/81FkAD3UO1L.jpg",
  //   categories: ["Fantasia","Ciencia Ficcion"],
  // }
  public User: UserInfo={
    nombre1: "",
    nombre2: "",
    apellidoP: "",
    apellidoM: "",
    fechaNac: "",
    emailAdd: "",
    donacion: 0
  };

  constructor(private sharingService: SahringServiceService, private router: Router) { }

  ngOnInit(): void {
    this.Libro1 = this.sharingService.SharingValue; 
  }

  validar():void{
    let valido=true;
    let valido1=false;
    const nombre1 = document.getElementById('nombre1');
    const apellidoP = document.getElementById('apellidoP');
    const fecha = document.getElementById('fechaNac');
    const email = document.getElementById('emailAdd');

    if(this.User.nombre1==""){
      if(nombre1){
        nombre1.style.background = '#ffbe0b';
        valido = false;
      }
    }else{
      if(nombre1){
        nombre1.style.background = "white";
      }
    }

    if(this.User.apellidoP==""){
      if(apellidoP){
        apellidoP.style.background = '#ffbe0b';
        valido = false;
      }
    }else{
      if(apellidoP){
        apellidoP.style.background = "white";
      }
    }
    // console.log(this.User.fechaNac)
    if(this.User.fechaNac==""){
      if(fecha){
        fecha.style.background = '#ffbe0b';
        valido = false;
      }
    }else{
      if(fecha){
        fecha.style.background = "white";
      }
    }

    if(this.User.emailAdd==""){
      if(email){
        email.style.background = '#ffbe0b';
        valido = false;
      }
    }else{
      if(this.User.emailAdd.includes('@')){
        if(nombre1){
          nombre1.style.background = "white";
        }
        valido1=true;
      } 
    }
    if(valido){
      if(!valido1){
        if(email){
          email.style.background = '#ffbe0b';
        }
        alert('correo No valido!!')
        return;
      }
      $('#cuenta-modal').modal('show');
      
      var route=this.router;
      $("#cuenta-modal").on("hidden.bs.modal", function( ){
        route.navigate([''])
      });
    }else{
      alert("Contesta los campos necesarios!!!")

    }
  }

  fuga():void{
    this.router.navigate([''])
  }

 

}
