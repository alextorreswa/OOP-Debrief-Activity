// Write your code here
class Products {
   constructor(name, department, cost) {
     this.name = name,
     this.deparment = department,
     this.cost = cost    
   }
   description() {
      console.log(`This is ${this.name} of the ${this.deparment} department with a cost of $${this.cost}`);
    };
 }
 
const tv = new Products('Sony Television','Electronics',30);
tv.description;


class groceryProducts extends Products{
   constructor(name, department, cost, weight, perishable) {
      super(name, department, cost),
      this.weight = weight,
      this.perishable = perishable
   }
   handleSpecial() {
      if(this.perishable===true) {
         console.log(`The weight of this is ${this.weight} and this is perishable`);         
      } else {
         console.log(`The weight of this is ${this.weight} and this is not perishable`);           
      }
    };  
 } 

const onion = new groceryProducts('Yellow Onions','Vegetables',5,50,true);
onion.description;
onion.handleSpecial;

console.log('hi');




