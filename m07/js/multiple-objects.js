// JavaScript & jQuery - Chapter 3: Functions, Methods & Objects

// Hotel object constructor
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
    this.getDetails = function() { // New method to get formatted details
      return this.name + ' rooms: ' + this.checkAvailability();
    };
}

// Create hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10); // New hotel object

// Update the HTML - using the new getDetails method
document.getElementById('hotel1').textContent = quayHotel.getDetails();
document.getElementById('hotel2').textContent = parkHotel.getDetails();
document.getElementById('hotel3').textContent = sunsetHotel.getDetails(); // Display Sunset Hotel

