"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        return `${age} (assuming current year is ${currentYear})`;
    }
}
