import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona:Persona = new Persona();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem('id');
    this.service.getPersonaId(+id!) // UNDEFINED NULL
    .subscribe(data => {
      this.persona = data;
    })
  }

  Actualizar(persona: Persona) {
    this.service.updatePersona(persona)
    .subscribe(data => {
      this.persona = data;
      alert("¡Se actualizó con éxito!");
      this.router.navigate(["listar"]);
    })
  }

}
