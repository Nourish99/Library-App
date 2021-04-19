import { Component, OnInit } from '@angular/core';

import { LibroA } from '../../interfaces/LibroA';
import { SahringServiceService} from '../../services/saharing-service.service';
import { ParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public Libs: LibroA[];

  public LibrosB : LibroA[];
  
  public categos: any;
 

  constructor( private sharingService: SahringServiceService, private router: Router, private rutaActiva: ActivatedRoute) {
    this.Libs=[];
    this.categos=this.rutaActiva.snapshot.params.categoria;
    this.LibrosB=[
      {
        ISBN:"8498389267", 
        title:"Harry Potter y el cáliz de fuego.",
        author: "J. K Rowling",
        content: "a sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. Si logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.",
        publisher: "Penguin Random House Grupo Editorial",
        publisher_date: "02/01/19",
        pages: 672,
        language: "Español",
        url_download: "http://colegioggv.cl/pdf/2020%20Libro%20hp%20el-caliz-de-fuego.pdf",
        url_read_online: "http://colegioggv.cl/pdf/2020%20Libro%20hp%20el-caliz-de-fuego.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81FkAD3UO1L.jpg",
        category: "Fantasia"
      },
     
      {
        ISBN:" 6073193009", 
        title:"Harry Potter Y La Piedra Filosofal",
        author: "J. K Rowling",
        content: "Harry Potter nunca ha oído hablar de Hogwarts cuando en el felpudo del número 4 de Privet Drive empieza a caer una lluvia de sobres de pergamino amarillento, con la dirección escrita con tinta verde y un sello de lacre púrpura"+
        "Y aunque los horribles tíos de Harry se apresuran a confiscar las cartas, el día que Harry cumple once años un hombre gigantesco llamado Rubeus Hagrid, cuyos ojos brillan como escarabajos negros, irrumpe con una noticia extraordinaria: Harry Potter es un mago, y le han concedido una plaza en el Colegio Hogwarts de Magia y Hechicería.",
        publisher: "Penguin Random House Grupo Editorial",
        publisher_date: "05/01/20",
        pages: 296,
        language: "Español",
        url_download: "http://web.seducoahuila.gob.mx/biblioweb/upload/J.K.%20Rowling%20-%20La%20Piedra%20filosofal.pdf",
        url_read_online: "http://web.seducoahuila.gob.mx/biblioweb/upload/J.K.%20Rowling%20-%20La%20Piedra%20filosofal.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81dxFCnAp0L.jpg",
        category: "Fantasia"
      },
      {
        ISBN:"6073128835", 
        title:"Juego de tronos (Canción de Hielo y Fuego 1) ",
        author: "George R. R. Martin",
        content: "En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia inmemorial surgen en los rincones más sombríos, la tierra del norte, Invernalia, está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder, la lujuria y el incesto, todo ello para ganarla más mortal de las batallas: el trono de hierro, una poderosa trampa que atrapará a los personajes.y al lector.",
        publisher: "Penguin Random House Grupo Editorial SA de CV",
        publisher_date: "03/01/15",
        pages: 800,
        language: "Español",
        url_download: "https://dariososafoula.files.wordpress.com/2017/01/cancion-de-hielo-y-fuego-1-juego-de-tronos.pdf",
        url_read_online: "https://dariososafoula.files.wordpress.com/2017/01/cancion-de-hielo-y-fuego-1-juego-de-tronos.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/61royjw7ITL.jpg",
        category: "Fantasia"
      },
      {
        ISBN:"6077479543", 
        title:"El arte de la guerra",
        author: "Sun Tzu",
        content: "Esta traducción del chino realizada y comentada por Ana Aranda Vasserot nos permite comprender la verdadera intención y significado de este gran clásico de la estrategia china. Es una edición especial en la que se analiza el texto de una manera accesible, comparando distintas interpretaciones de términos o pasajes complejos y recurriendo a personajes y libros coetáneos relacionados con el arte militar, que ayudan a aclarar el sentido de la obra. El líder Liu Jin, afirma Aranda Vasserot, comparaba El arte de la guerra con «un montón de perlas tintineando en un plato»; para él, el libro no poseía una estructura definida, sino que era una recopilación de dichos. Pero estos dichos están ordenados de una manera concreta y con un estilo definido, y el propósito de esta edición comentada es detectar el hilo que une esas perlas.",
        publisher: " Ediciones Culturales Paidos S. A. De C. V.",
        publisher_date: "08/01/20",
        pages: 176,
        language: "Español",
        url_download: "https://biblioteca.org.ar/libros/656228.pdf",
        url_read_online: "https://biblioteca.org.ar/libros/656228.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/71AXnlrDnPL.jpg",
        category: "Arte",
      },
      {
        ISBN:"0399580433", 
        title:"Women in Art: 50 Fearless Creatives Who Inspired the World",
        author: "Rachel Ignotofsky",
        content: "Illustrated profiles of 50 pioneering female artists--from the 11th century to today--from the author of the New York Times bestseller Women in Science."+
        "A charmingly illustrated and inspiring book, Women in Art highlights the achievements and stories of 50 notable women in the arts--from well-known figures like painters Frida Kahlo and Georgia O'Keefe, to lesser-known names like 19th-century African American quilter Harriet Powers and Hopi-Tewa ceramic artist Nampeyo. Covering a wide array of artistic mediums, this fascinating collection also contains infographics about artistic movements throughout history, statistics about women's representation in museums, and notable works by women. Women in Art celebrates the success of the bold female creators who inspired the world and paved the way for the next generation of artists.",
        publisher: "Ten Speed Press",
        publisher_date: "09/10/19",
        pages: 128,
        language: "Ingles",
        url_download: "https://kingblakemurphy.files.wordpress.com/2020/06/women-in-art-50-fearless-cre.pdf",
        url_read_online: "https://kingblakemurphy.files.wordpress.com/2020/06/women-in-art-50-fearless-cre.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/91ZCSyZ6p7L.jpg",
        category: "Arte",
      },
      {
        ISBN:"6076189215", 
        title:"Colección de libros arte: Klimt",
        author: "E.L. Cardona",
        content: "El arte de Gustav Klimt surge de las dos tendencias antagónicas de finales del siglo XIX: La pintura histórica tradicional bajo sus diferentes formas (Rahl, Canon, Makart) y un impresionismo muy próximo a la pintura de aire libre francesa.",
        publisher: "Advanced Marketing S",
        publisher_date: "05/09/17",
        pages: 127,
        language: "Español",
        url_download: "http://uje.ftik.usm.ac.id/0P_cuadernos-eroticos-klimt-los-dibujos-mas-intimos_XGOUZmFc.pdf",
        url_read_online: "http://uje.ftik.usm.ac.id/0P_cuadernos-eroticos-klimt-los-dibujos-mas-intimos_XGOUZmFc.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81NLEF9PBTL.jpg",
        category: "Arte",
      },
      {
        ISBN:"6073166443", 
        title:"Contacto",
        author: "Carl Sagan",
        content: "alardonado con el premio Pulitzer por Los dragones del Edén, Sagan es además el aclamado autor de Cosmos, el libro de divulgación científica más vendido de la historia, el cual inspiró una aclamada serie de televisión estrenada en más de sesenta países. Contacto, premio Locus 1986, desarrolla una de las constantes en la trayectoria del autor: la búsqueda de inteligencia extraterrestre y la comunicación con ella a través de sondas espaciales. En 1997, el director de cine Robert Zemeckis llevó esta historia a la gran pantalla, en una película protagonizada por Jodie Foster y Matthew McConaughey. Tras cinco años de incesantes búsquedas con los dispositivos más sofisticados del momento, la astrónoma Eleanor Arroway consigue, junto a un equipo de científicos internacionales, conectar con la estrella Vega y demostrar que no estamos solos en el universo. Empieza entonces un trepidante viaje hacia el encuentro más esperado de la historia de la humanidad, y con él Sagan plantea magistralmente cómo afectaría a nuestra sociedad la recepción de mensajes de una civilización extraterrestre.",
        publisher: "Penguin Random House Grupo Editorial",
        publisher_date: "06/11/18",
        pages: 432,
        language: "Español",
        url_download: "http://s3.amazonaws.com/ppl/recursos/6/original.pdf?1342056575",
        url_read_online: "http://s3.amazonaws.com/ppl/recursos/6/original.pdf?1342056575",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81x8silnMzL.jpg",
        category: "Ciencia Ficcion",
      },
      {
        ISBN:"6073159269", 
        title:"El fin de la eternidad",
        author: "Isaac Asimov",
        content: "Un hito de las novelas sobre viajes temporales. En el siglo XXVII, la Tierra funda una organización llamada Eternidad, enviando sus emisarios al pasado y al futuro para abrir el comercio entre las diferentes épocas, y para alterar la larga y a veces trágica historia de la raza humana. El proyecto estaba integrado sólo por los mejores y más brillantes exponentes de cada siglo: personas que dejaron de lado sus propias vidas para dedicarse a servir a los demás. Para hombres como Andrew Harlan, Eternidad representaba mucho más que un trabajo: era su vida, su amante, sus hijos, su familia. Pero, cuando viajó al siglo cuatrocientos ochenta y dos, no pudo evitar enamorarse perdidamente de una hermosa no-eterna llamada Noÿs Lambent. Ahora, perseguidos por una burocracia todopoderosa, Harlan y su amada escapan entre los siglos, buscando romper todas las reglas que sean necesarias para preservar su futuro juntos. Incluso si para ello tuvieran que destruir la propia Eternidad.",
        publisher: "Penguin Random House Grupo Editorial",
        publisher_date: "11/21/17",
        pages: 288,
        language: "Español",
        url_download: "https://www.u-cursos.cl/usuario/c19094b1ea89f1f08e243796b671e2e5/mi_blog/r/Isaac_Asimov_-_El_fin_de_la_eternidad.pdf",
        url_read_online: "https://www.u-cursos.cl/usuario/c19094b1ea89f1f08e243796b671e2e5/mi_blog/r/Isaac_Asimov_-_El_fin_de_la_eternidad.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Zg65UYkpL.jpg",
        category: "Ciencia Ficcion",
      },
      {
        ISBN:"0307887448", 
        title:"Ready Player One",
        author: "Ernest Cline",
        content: "Nominated as one of America's best-loved novels by PBS's The Great American Read The worldwide bestseller--now a major motion picture directed by Steven Spielberg. In the year 2045, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he's jacked into the virtual utopia known as the OASIS. Wade's devoted his life to studying the puzzles hidden within this world's digital confines--puzzles that are based on their creator's obsession with the pop culture of decades past and that promise massive power and fortune to whoever can unlock them. But when Wade stumbles upon the first clue, he finds himself beset by players willing to kill to take this ultimate prize. The race is on, and if Wade's going to survive, he'll have to win--and confront the real world he's always been so desperate to escape.",
        publisher: "Broadway Book",
        publisher_date: "06/05/12",
        pages: 374,
        language: "Ingles",
        url_download: "https://revistes.ub.edu/index.php/filmhistoria/article/download/28349/29069",
        url_read_online: "https://sgfm.elcorteingles.es/SGFM/dctm/DOCUMENTOS/201111/24/00106520595833DP1.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/9193hRad9yL.jpg",
        category: "Ciencia Ficcion",
      },
      {
        ISBN:"6078589172", 
        title:"El sutil arte de que te importe un carajo: Un enfoque disruptivo para vivir una buena vida",
        author: "Mark Manson",
        content: "Durante los últimos años, Mark Manson -en su popular blog- se ha afanado en corregir nuestras delirantes expectativas sobre nosotros mismos y el mundo. Ahora nos ofrece su toda su intrépida sabiduría en este libro pionero. Manson nos recuerda que los seres humanos somos falibles y limitados: 'no todos podemos ser extraordinarios: hay ganadores y perdedores en la sociedad, y esto no siempre es justo o es tu culpa'. Manson nos aconseja que reconozcamos nuestras limitaciones y las aceptemos. Esto es, según él, el verdadero origen del empoderamiento. Una vez que abrazamos nuestros temores, faltas e incertidumbres, una vez que dejamos de huir y evadir y empezamos a confrontar las verdades dolorosas, podemos comenzar a encontrar el valor, la perseverancia, la honestidad, la responsabilidad, la curiosidad y el perdón que buscamos. Este manifiesto es una refrescante bofetada, para que podamos empezar a llevar vidas más satisfechas y con los pies en la tierra.",
        publisher: "HarperCollins Mexico S.A. de C.V.",
        publisher_date: "09/19/18",
        pages: 224,
        language: "Español",
        url_download: "https://www.gonvill.com.mx/archivos/9786079765453.pdf",
        url_read_online: "https://www.gonvill.com.mx/archivos/9786079765453.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/71QlXfKoBOL.jpg",
        category: "Autoayuda",
      },
      {
        ISBN:"607858975X", 
        title:"Inquebrantables",
        author: "Daniel Habif",
        content: "¿Alguna vez te has preguntado cuál es la verdadera importancia de la motivación, inspiración y actitud para emprender el camino hacia el éxito en el área en la que desees desempeñarte? Daniel Habif, emprendedor mexicano, es líder del movimiento Inquebrantables, con el cual motiva a las personas a encontrar sus flaquezas, aprender de sus errores o de los obstáculos en el camino para convertirlos en posteriores fortalezas; rescatando en ello la perseverancia como principal virtud para alcanzar sus objetivos. El multitalentoso conferencista utiliza la espiritualidad, la ciencia de la felicidad y las combina con el arte, música y poesía para ayudar a las personas a encontrarse a sí mismas. Rompiendo todos los esquemas de motivación e inspiración, combinando arte, música y poesía, Habif se ha presentado en más de 120 ciudades consiguiendo un éxito rotundo y logrando alcanzar a millones de personas con su movimiento.",
        publisher: "HarperCollins México",
        publisher_date: "11/12/19",
        pages: 336,
        language: "Español",
        url_download: "https://sinlimites.com.co/wp-content/uploads/2020/05/Inquebrantables-Daniel-Habif.pdf",
        url_read_online: "https://sinlimites.com.co/wp-content/uploads/2020/05/Inquebrantables-Daniel-Habif.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81-sR+DgRZL.jpg",
        category: "Autoayuda",
      },
      {
        ISBN:"8478086080", 
        title:"Los Secretos De La Mente Millonaria: Cómo dominar el juego interior de la riqueza",
        author: "T. Harv Eker",
        content: "Todos tenemos un patrón personal del dinero arraigado en nuestro subconsciente, y es este patrón, más que cualquier otra cosa, lo que determinará nuestra vida financiera. Puedes saberlo todo sobre mercadotecnia, ventas, negociaciones, acciones, propiedad inmobiliaria y finanzas en general, pero si tu patrón del dinero no está programado para el éxito nunca tendrás mucho dinero; y si, de algún modo lo consigues, ¡lo perderás con gran facilidad. la buena noticia es que ahora, aplicando las sencillas instrucciones contenidas en este libro, puedes programar de nuevo tu patrón del dinero para que te lleve al éxito económico de una forma natural y automática.",
        publisher: " Nirvana Libros",
        publisher_date: "10/24/11",
        pages: 256,
        language: "Español",
        url_download: "https://soyemprendedor.co/wp-content/uploads/2017/01/Los-Secretos-De-La-Mente-Millonaria.pdf",
        url_read_online: "https://soyemprendedor.co/wp-content/uploads/2017/01/Los-Secretos-De-La-Mente-Millonaria.pdf",
        cover: "https://images-na.ssl-images-amazon.com/images/I/71WDmR4x0zL.jpg",
        category: "Autoayuda",
      },
    ]
  }

  
  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((params: ParamMap)=>{
      this.categos = params.get('categoria');
      this.Libs=[];
      this.buscarCat(this.categos);
    })
    
  }

  buscarCat(a:string):void{
    this.LibrosB.forEach(element => {
      if(element.category==a || (a=='Ciencia' && element.category=="Ciencia Ficcion")){
        this.Libs.push(element);
      }
    });
  }
 
  enviarInfo(id:number, b:boolean): void{
    if(b){
      this.sharingService.SharingValue=this.Libs[id];
    }else{
      this.sharingService.SharingValue=this.LibrosB[id];
    }
    this.router.navigate(['/Libro'])
  }
  
}
