// src/app/add-car/add-car.component.ts
import { Component } from '@angular/core';
import { CarService, Car } from '../car.service';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car: Car = {
    make: '',
    model: '',
    year: new Date().getFullYear(), // Initialize year with the current year or another default value
    vin: '',
    status: 'Pending'
  };

  constructor(private carService: CarService, private popupService: PopupService) {}

  onSubmit() {
    this.carService.addCar(this.car);
    this.popupService.hide();
  }
}
