import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  personas: Persona[] | undefined;

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      })
  }

  Editar(persona: Persona): void {
    localStorage.setItem("id", persona.id!.toString()); // UNDEFINED
    this.router.navigate(["edit"]);

  }

  Delete(persona: Persona) {
    this.service.deletePersona(persona)
    .subscribe(data => {
      this.personas = this.personas!.filter(p => p !== persona);
      alert("Usuario Eliminado");
    })
  }

}
