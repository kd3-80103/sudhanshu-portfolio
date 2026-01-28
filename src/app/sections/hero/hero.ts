import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for *ngIf

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  standalone: true,
  imports: [CommonModule] // Ensure CommonModule is here
})
export class HeroComponent implements OnInit {
  @Output() openContact = new EventEmitter<void>();
  fullText = 'Java Full Stack Developer';
  displayedText = '';
  index = 0;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect() {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeEffect(), 100);
    }
  }

  onContactClick() {
    this.openContact.emit();
  }
}