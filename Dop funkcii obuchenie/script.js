function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    };
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
}

const Artur = new User ('Artur', 28); 
const Dasha = new User ('Dasha', 18);

Artur.exit(); 

Artur.hello(); 
Dasha.hello(); 

console.log(Artur);
console.log(Dasha); 