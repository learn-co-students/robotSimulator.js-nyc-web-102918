class Robot {

  constructor(coordinates = [0,0], bearing = "north") {
   this.coordinates = coordinates
   this.bearing  = bearing
 }

 setCoordinates(x,y) {
   this.coordinates= [x,y]
 }

 setBearing(bearing) {
   const validBearings = ["north", "south", "east", "west"]

   if (validBearings.includes(bearing)) {
     this.bearing = bearing
   } else {
     throw new Error("Invalid Robot Bearing")
   }
 }

 place(position) {
   this.coordinates = [position.x, position.y]
   this.bearing = position.direction
 }

 turnRight() {
   switch (this.bearing) {
     case "north":
       this.bearing = "east"
       break
     case "south":
       this.bearing = "west"
       break
     case "east":
       this.bearing = "south"
       break
     case "west":
       this.bearing = "north"
       break
   }
 }

 turnLeft() {
   switch (this.bearing) {
     case "north":
       this.bearing = "west"
       break
     case "south":
       this.bearing = "east"
       break
     case "east":
       this.bearing = "north"
       break
     case "west":
       this.bearing = "south"
       break
   }
 }

 advance() {
   switch (this.bearing) {
     case "north":
       this.coordinates[1] += 1
       break
     case "south":
       this.coordinates[1] -= 1
       break
     case "east":
       this.coordinates[0] += 1
       break
     case "west":
       this.coordinates[0] -= 1
       break
   }
 }

 translateInstructions(instuctions) {
   const instuctionList = instuctions.split("")

   instuctionList.forEach(instruction => {
     switch (instruction) {
       case "L":
         this.turnLeft()
         break
       case "R":
          this.turnRight()
         break
       case "A":
         this.advance()
         break
     }
   })
 }
}
