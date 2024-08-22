import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-started',
  templateUrl: './started.page.html',
  styleUrls: ['./started.page.scss'],
})
export class StartedPage implements AfterViewInit {
  images!: NodeListOf<HTMLImageElement>;
  imageSources: string[];
  showNewCard: boolean = false; // Biến để điều khiển hiển thị card mới hoặc card cũ

  constructor(
    private router: Router,
  ) {
    // Mảng hình ảnh cho tất cả các item
    this.imageSources = ['./assets/food.png', './assets/movie.png', './assets/game.png'];
  }

  ngAfterViewInit(): void {
    this.images = document.querySelectorAll('.card-item img');
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

      // Hiển thị card mới và ẩn card cũ sau khi random xong
      this.showNewCard = true;
    }, 2000);
  }
}
