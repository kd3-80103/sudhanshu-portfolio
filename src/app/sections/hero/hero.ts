import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  standalone: true
})
export class HeroComponent implements OnInit {

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
}
