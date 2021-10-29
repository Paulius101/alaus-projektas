import {
  Component,
  OnInit
} from '@angular/core';
import {
  Alus
} from 'src/app/model/alus';
import {
  AlausServiceService
} from 'src/app/services/alaus-service.service';
import {
  OwlOptions
} from 'ngx-owl-carousel-o';
import { gsap} from 'gsap';
@Component({
  selector: 'app-alaus-list',
  templateUrl: './alaus-list.component.html',
  styleUrls: ['./alaus-list.component.scss']
})
export class AlausListComponent implements OnInit {

  constructor(public alausService: AlausServiceService) {}
  ngOnInit(): void {
    const listAnim = gsap.timeline({ defaults: { ease: "power1.out" } });
    listAnim.fromTo(".list", { opacity: 0 }, { opacity: 1, duration: 1 }, "3");
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      940: {
        items: 1
      },
   
    },
    nav: true
  }

}
