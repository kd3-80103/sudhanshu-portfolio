import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  standalone: true,
})
export class FooterComponent {
  @Output() openContact = new EventEmitter<void>();

  onContactClick() {
    this.openContact.emit();
  }
}
