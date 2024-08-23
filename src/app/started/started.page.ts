import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-started',
  templateUrl: './started.page.html',
  styleUrls: ['./started.page.scss'],
})
export class StartedPage implements AfterViewInit {
  images!: NodeListOf<HTMLImageElement>;
  imageSources: string[];
  showNewCard: boolean = true; // Biến để điều khiển hiển thị card mới hoặc card cũ
  showSecondCard: boolean = false;

  constructor(
    private router: Router,
    private gestureCtrl: GestureController, // Add GestureController
    private renderer: Renderer2
  ) {
    // Mảng hình ảnh cho tất cả các item
    this.imageSources = ['./assets/food.png', './assets/movie.png', './assets/game.png'];
  }

  ngAfterViewInit(): void {
    this.images = document.querySelectorAll('.card-item img');
    this.initSwipeGesture();
  }

  initSwipeGesture() {
    const card = document.querySelector('.new-card') as HTMLElement;
    const gesture: Gesture = this.gestureCtrl.create({
      el: card,
      gestureName: 'swipe',
      onMove: ev => this.onMove(ev, card),
      onEnd: ev => this.onEnd(ev, card)
    });
    gesture.enable();
  }

  onMove(ev: any, card: HTMLElement) {
    this.renderer.setStyle(card, 'transform', `translate(${ev.deltaX}px, ${ev.deltaY}px) rotate(${ev.deltaX / 10}deg)`);
  }

  onEnd(ev: any, card: HTMLElement) {
    if (Math.abs(ev.deltaX) > 100) { // If swipe distance is more than 100px
      const direction = ev.deltaX > 0 ? 'translateX(100vw)' : 'translateX(-100vw)';
      this.renderer.setStyle(card, 'transition', 'transform 0.5s ease-out');
      this.renderer.setStyle(card, 'transform', `${direction} rotate(${ev.deltaX / 10}deg)`);

      setTimeout(() => {
        this.showNewCard = false; // Hide the card after animation
      }, 500);
    } else {
      // Reset position if swipe is not sufficient
      this.renderer.setStyle(card, 'transition', 'transform 0.5s ease-out');
      this.renderer.setStyle(card, 'transform', 'translate(0, 0) rotate(0)');
    }
  }

  spinImages() {
    this.showNewCard = false; // Đảm bảo card cũ được hiển thị trước khi bắt đầu random
    this.images.forEach(img => img.classList.remove('selected'));

    // Tạo một bản sao của imageSources để loại bỏ dần các lựa chọn đã sử dụng
    let availableImages = [...this.imageSources];

    // Bắt đầu xoay các hình ảnh theo chiều dọc
    this.images.forEach((img, index) => {
      img.classList.add('spin');
      // Di chuyển ảnh lên xuống một cách ngẫu nhiên
      img.style.transform = `translateY(-${Math.floor(Math.random() * 3) * 100}%)`;
    });

    // Dừng lại ở vị trí ngẫu nhiên sau 2 giây
    setTimeout(() => {
      this.images.forEach((img) => {
        img.classList.remove('spin');

        // Chọn ngẫu nhiên một hình ảnh từ mảng hình ảnh còn lại
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        img.src = availableImages[randomIndex];

        // Loại bỏ hình ảnh đã chọn khỏi mảng để đảm bảo không bị trùng lặp
        availableImages.splice(randomIndex, 1);

        // Đặt vị trí về ban đầu (hàng đầu tiên)
        img.style.transform = `translateY(0)`;

        // Thêm lớp 'selected' cho cả 3 hình ảnh
        img.classList.add('selected');
      });

      // Hiển thị card mới và ẩn card cũ sau khi random

      // set
      setTimeout(() => {
        this.showNewCard = true;
      }, 1000)
    }, 2000);
  }
}
