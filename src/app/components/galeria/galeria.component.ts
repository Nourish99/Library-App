import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import {imgInfo} from '../../interfaces/imgInfo';
// import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit{

  public imagenes : imgInfo[];

  @ViewChild('contenido') contenido: any;
  constructor() {
    this.imagenes = [
      {
        title: "The Bell jar",
        description: "Una de las poetas más trágicas de la literatura contemporánea se suicidó poco después de publicar este libro en 1963. La portada de 1978, con su fuente gótica, capturó la esencia de la trama e hizo al libro aún más famoso.",
        autor: "Sylvia Plath (1978)",
        url: "https://img.culturacolectiva.com/content/2013/08/portada.jpg"
      },
      {
        title: "Catch-22,",
        description:"El libro que creó una paradoja en la que es imposible salir de un problema, pues al resolverlo las consecuencias te regresan a él o a ejecutar lo que se quería evitar en un principio, fue ilustrado por Paul Bacon, quien, también, ilustró El bebé de Rosemary y Atrapado sin salida.",
        autor: "Joseph Heller (1961)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada1-1.jpg"
      },
      {
        title: "A million little pieces",
        description:"Una de las portadas más famosas del nuevo milenio es una “autobiografía” en la que el autor narra su paso por la rehabilitación.",
        autor: "James Frey (2003)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada2-1.jpg"
      },
      {
        title: "The cat in the hat",
        description:"Theodor Seuss Geisel, mejor conocido como Dr. Seuss, es famoso por ser el creador de personajes como “El grinch”, “El lorax” o “El gato en el sombrero”. Este último con su portada sobria y amigable será recordado por generaciones.",
        autor: "Dr. Seuss (1957)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada3-1.jpg"
      },
      {
        title: "The great Gatsby",
        description:"Los ojos celestiales de la famosa portada del gran Gatsby fueron creados por Francis Cugat, la portada se ha vuelto a encontrar en librerías gracias al reciente lanzamiento de la adaptación cinematográfica protagonizada por Leonardo Di Caprio.",
        autor: "F. Scott Fitzgerald (1925)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada4-1.jpg"
      },
      {
        title: "Night",
        description:"El sobreviviente del holocausto y ganador del premio Nobel de la Paz en 1986, publicó el libro en 1955 y fue casi 30 años después cuando la casa editorial Bantam lo publicó con esta portada.",
        autor: "Elie Wiesel (1982)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada5-1.jpg"
      },
      {
        title: "Catcher in the rye",
        description:"Salinger presentaba sus libros con gran sobriedad: el título y su nombre, nada más. Mientras ese diseño se volvió mítico, el famoso ilustrador E. Michael Mitchell creó la portada del libro, tan famosa como el papel que la envuelve.",
        autor: "J.D. Salinger (1951)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada6-1.jpg"
      },
      {
        title: "Jurassic Park",
        description:"No hay forma de ver esta portada sin pensar en una de las obras maestras del cine de ficción, con su arte de alto contraste Chipp Kidd dejó el símbolo que hace una leyenda.",
        autor: "Michael Crichton (1981)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada7-1.jpg"
      },
      {
        title: "Atlas Shrugged",
        description:"Una de las novelas más largas jamás escritas (más de mil 300 páginas), cuyo tema en palabras de la autora es: “no sobre el asesinato del cuerpo de un hombre, sino sobre el asesinato – y el renacimiento – del espíritu humano”, fue ilustrado por Nick Gaetano para celebrar el 25 aniversario de su publicación.",
        autor: "Ayn Rand (1981)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada8-1.jpg"
      },
      {
        title: "Brave new world",
        description:"Leslie Holland tuvo el encargo de ilustrar la portada de un libro que cuenta la historia de un mundo en el que todo transcurre perfectamente y que a pesar de eso, algo no está bien.",
        autor: "Aldous Huxley (1932)",
        url:"https://img.culturacolectiva.com/content/2013/08/portada9-1.jpg"
      }
    ]
  }


  ngOnInit(): void {
  }

  ponerEvento(): void{
    $("img").on('click', function(){
      let description: any = $(this).attr('name');
      let img: any = $(this).attr('src');
      let titulo: any = $(this).attr('alt');
     $("#muestra_img").attr('src', img);
     $("#desc-img").text(description);
     $("#tit-img").text(titulo);
     $("#imgmodal").modal('show');
 });
  }
}
