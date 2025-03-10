import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SidebarComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {

}
