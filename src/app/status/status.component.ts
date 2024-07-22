// src/app/status/status.component.ts
import { Component, OnInit } from '@angular/core';
import { Car, CarService } from '../car.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }
}
