import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BanderasService } from '../banderas.service';

@Component({
  selector: 'app-bandera',
  templateUrl: './bandera.component.html',
  styleUrls: ['./bandera.component.css']
})
export class BanderaComponent implements OnInit {

  misBanderas:any[]|undefined;
  misPaises:Observable<any>|undefined;
  constructor(private servBandea: BanderasService, private http :HttpClient) {
    
   }
   bandera:string="";
  ngOnInit(): void {
    this.servBandea.todos().subscribe(
      banderas=>{
        console.info(banderas);  
      this.misBanderas = banderas; 
    }  );
    
    this.misPaises = this.servBandea.todos();
    
  }

  buscarPais(nombre:string){
    this.servBandea.pais(nombre).subscribe(t=>
        this.bandera = t[0].flags.png
      )

  }

}
