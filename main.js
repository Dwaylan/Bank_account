let mapping = {
    'Plane': 'Pilot',
    'boat': 'capitan',
    'bus': 'driver',
    'train': 'conductor'
}


class Vehicle {
    type; 
    startDate;
    id;
    capacity;
    crew;

    constructor(id, type, startDate, capacity){
        this.id = id;
        this.type = type;
        this.startDate = startDate;
        this.capacity = capacity;
        this.crew = [];
    }
    // If there is atleast one crew on board that can pilot this vehicle
    // return "good to go" else return "not ready"
    status(){
        let requiredJob = mapping[this.type]
        console.log("the required job is")
    // look to see who is on board and check their job title, and see if if matched
    // the vehichle. If found return "good to go", otherwise check the next person.
    // If we run out of people to check return "not ready"
    for(let i =0; i < this.crew.length; i++ ){
        let memeber = this.crew[i];
        if (memeber.job == requiredJob){
            return 'good to go'
        }
        return 'not ready yet';

        }

    }
    

}

class Employee {
    job;
    name;
    id;
    Vehicle;

    constructor(id, name, job){
        this.id = id;
        this.name = name;
        this.job = job;
        this.Vehicle = null;
    }
    assignTo(theVehichle){
        this.Vehicle = theVehichle
        theVehichle.crew.push(this)
    }
}

let titanic = new Vehicle('doomed','boat', '1812', 2220)
let jet1 = new Vehicle('sonic','plane','2020',5)
let thomas = new Vehicle('1','train','2018',2)

let frank = new Employee(1, 'Frank Underwood', 'Bus Driver')
let megan = new Employee(2, 'Megan Smith', 'Pilot')
let mark = new Employee(2,'Mark Doe', 'Assistant')
let mary = new Employee(2,'Mary Doe','Assistant')

mary.assignTo(titanic)
mark.assignTo(jet1)
megan.assignTo(jet1)
frank.assignTo(titanic)

