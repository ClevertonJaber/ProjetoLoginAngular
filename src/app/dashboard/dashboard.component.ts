import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
}
