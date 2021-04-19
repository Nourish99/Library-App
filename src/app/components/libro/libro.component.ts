import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LibroA } from '../../interfaces/LibroA';
import { SahringServiceService} from '../../services/saharing-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
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
    category:""
  };

  constructor(private rutaActiva: ActivatedRoute, private sharingService: SahringServiceService,  private router: Router) { 

  }

  ngOnInit(): void {
    this.Libro1 = this.sharingService.SharingValue;
  }

  obtenerLibro(): void{
    this.sharingService.SharingValue = this.Libro1;
    this.router.navigate(['/Compra']);
  }

}
