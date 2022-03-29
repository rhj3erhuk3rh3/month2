 class dom {
    constructor(First_floor, two_floor, door,roof, window, waal, pipe) {
        this.First_floor = First_floor;
        this.two_floor = two_floor;
        this.door = door;
        this.roof = roof;
        this.window = window;
        this.waal = waal;
        this.pipe = pipe;
    }
}


class stage extends dom{
    constructor(First_floor, two_floor, door,roof, window, waal, pipe) {
        super(First_floor, two_floor, door,roof, window, waal, pipe)

    }


 }
const domm = new stage(
    "3 room",
    "4 room",
    "white",
    "green",
    "dasda",
    "cement",
    "long"
    )
console.log(domm)

 class dom2 {
     constructor(First_floor, hall, bath_room, kitchen_room, door) {
         this.First_floor = First_floor;
         this.hall = hall;
         this.door = door;
         this.bath_room = bath_room;
         this.kitchen_room = kitchen_room;
     }
 }
 class house extends dom2 {
     constructor(First_floor, hall, bath_room, kitchen_room, door, dsd) {
         super(First_floor, hall, bath_room, kitchen_room, door)
         this.dsd = dsd;
     }
 }
     const
     house2 = new house(
         "1 room",
         "white",
         "green",
         "cement",
         "long",
         "sasa"
     )
 console.log(house2)
