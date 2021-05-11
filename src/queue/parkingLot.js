const Queue = require("../queue/queue");

/**
 * Implement a Parking Lot.
 *
 */
class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  /**
   * Returns the number of vacant parking spaces
   * @returns {Number}
   *  the total number of spaces where the value is "vacant".
   */

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  /**
   * As cars enter the parking lot, the license plate number is entered and the car is parked in the first vacant space.
   * If the lot is full, the car is added to the queue to be parked when a spot is available.
   *
   * @param licensePlateNumber
   *  the license plate number of the car entering
   */
  enter(licensePlateNumber) {
    //foundSpot identifies if a car is able to find a spot, if they do they will not have to wait in line.
    let foundSpot = false;
    //cycle through spaces array looking for a vacant spot
    for (let i = 0; i < this.spaces.length; i++) {
      if (this.spaces[i] === "vacant") {
        //if a vacant spot is found, park the car, flag foundSpot is true, then stop the loop by setting i to spaces.length
        this.spaces[i] = licensePlateNumber;
        foundSpot = true;
        i = this.spaces.length;
      }
    }
    //if we were unable to find a spot, put the car in the parking queue.
    if (foundSpot == false) {
      this.queue.enqueue(licensePlateNumber);
    }
  }

  /**
   * As a car leaves the parking lot, or the queue, the leave method is called with the license plate number of the car leaving.
   * @param licensePlateNumber
   *    *  the license plate number of the car leaving.
   */
  leave(licensePlateNumber) {
    //parked determines if a car leaving was already parked or not.
    let parked = false;
    //console.log(licensePlateNumber);
    if (licensePlateNumber != null) {
      //cycle through each parking space looking for the car's liscense plate.
      this.spaces.forEach((space, index) => {
        //if a space has the liscense plate, we charge them the rate and add it to our revenue, then park the next car in the queue.
        if (space === licensePlateNumber) {
          this.revenue = this.revenue + this.rate;
          this.spaces[index] = this.queue.dequeue();
          parked = true;
        }
      });
      //if we were unable to find the car parked, that means they were in the queue and we must remove them from the queue.
      if (parked == false) {
        //create a temp queue to put cars into while we find the car to remove.
        let tempQ = [];
        while (this.queue.first != null) {
          //once we find the car, remove it from the queue, otherwise keep pushing the queue into the temp queue.
          if (this.queue.peek() === licensePlateNumber) {
            this.queue.dequeue();
          } else {
            tempQ.push(this.queue.dequeue());
          }
        }
        //now enqueue the tempQ into the actual queue without the car that left.
        tempQ.forEach((licsense) => {
          this.queue.enqueue(licsense);
        });
      }
    }
  }

  /**
   * Lists each space in the parking lot along with the license plate number of the car parked there, or
   * "vacant" as the license plate if the spot is vacant.
   * @returns {{licensePlateNumber: string, space: Number}[]}
   */
  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  /**
   * The total cumulative revenue for the parking lot. The parking rate is paid when the car leaves, it does not matter how long the car stays in the spot.
   * @returns {number}
   *  the total revenue for the parking lot.
   */
  get totalRevenue() {
    return this.revenue;
  }
}

module.exports = ParkingLot;
