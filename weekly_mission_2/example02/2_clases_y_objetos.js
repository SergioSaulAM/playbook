//Ejemplo 1: Crear una clase vacía
class Person {
}

console.log("Ejemplo 1: Crear una clase vacía");
console.log(Person);




//Ejemplo 2: Crear un objeto a partir de una clase
class Pet {
}
const myPet1 = new Pet();
console.log("Ejemplo 2: Crear un objeto a partir de una clase");
console.log(myPet1);




//Ejemplo 3: Instanciar un objeto con atributos
class Student {
    //El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor (name, age, subjects) {
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }
}

//Crear un objeto de la clase Student (esto se le llama instanciación)
const sergioStudent = new Student("Sergio", 19, ["HTML", "CSS", "JS", "Java"]);
console.log("Ejemplo 3: Instanciar un objeto con atributos");
console.log(sergioStudent);




//Ejemplo 4: Método en los objetos
class Repository {
    constructor(name, author, language, stars) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.stars = stars;
    }

    getInfo() {
        return `Repository ${this.name} has ${this.stars} stars`;
    }
}

console.log("Ejemplo 4: Métodos en los objetos");
const myRepo = new Repository("Launch X", "SergioSaulAM", "JS", 100);
console.log(myRepo.getInfo());




//Ejemplo 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed) {
        this.repo = repo;
        this.title = title;
        this.lines_changed = lines_changed;
        this.status = "OPEN";
        this.dateCreated = new Date(); //Esto guardará la fecha actual en que se instancia el objeto.
    }

    getInfo() {
        return `This PR is in the repo: ${this.repo} (status ${this.status}) and was created on ${this.dateCreated})`;
    }
}

console.log("Ejemplo 5: Atributos con valores por default");
const myPR1 = new PullRequest("LaunchX", "Mi primer PR", 100);
console.log(myPR1.getInfo());

//Puedes instanciar n cantidad de objetos de la misma clase
console.log("Ejemplo 5: Atributos con valores por default");
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99);
console.log(myPR2.getInfo());




//Ejemplo 6: Getters para acceder a los atributos

class Ajolonauta {
    constructor(name, age, stack) {
        this.name = name;
        this.age = age;
        this.stack = stack;
        this.exercises_completed = 0;
        this.exercises_todo = 99;
    }

    //Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {
        return this.exercises_completed;
    }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto");
const woopa = new Ajolonauta("Woopa", 1, []);
console.log(woopa.getExercisesCompleted);




//Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission) {
        this.name = name;
        this.mission = mission;
        this.students = 0;
        this.lives = 0;
    }

    get getStudents() {
        return this.students;
    }

    get getLives() {
        return this.lives;
    }

    set setStudents(students){
        this.students = students;
    }

    set setLives(lives) {
        this.lives = lives;
    }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto");
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS");

console.log(missionCommanderNode.getStudents); //0 por default
console.log(missionCommanderNode.getLives); //0 por default

//Actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100;
missionCommanderNode.setLives = 3;

console.log(missionCommanderNode.getStudents); //valor = 100
console.log(missionCommanderNode.getLives); //valor = 3



//Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
    static getMostUsefulTools() {
        return ["Command Line", "git", "Text Editor"];
    }
}

console.log("Ejemplo 8: Método static");
//Puedo llamar al método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools());
/**
 * Si intentamos instanciar un objeto, no podremos llamar este método static
 * const toolbox = new Toolbox();
 * console.log(toolbox.getMostUsefulTools()); //in not a function
 */


/**
 * 
 * 
 * HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
 * 
 * 
 */

//Ejemplo 9: Herencia entre dos clases;
class Developer {
    constructor(name, mainLang, stack) {
        this.name = name;
        this.mainLang = mainLang;
        this.stack = stack;
    }

    get getName() {
        return this.name;
    }
}

console.log("Ejemplo 9: Herencia entre dos clases");
const sergioDev = new Developer("Sergio", "Java", ["Elixir", "Groovy", "Lisp"]);
console.log(sergioDev);

class LauchXStudent extends Developer {
}

const sergioLaunchXDev = new LauchXStudent("Carlo", "Java", ["Elixir", "Groovy", "Lisp"]);
console.log(sergioLaunchXDev);
console.log(sergioLaunchXDev.getName); //Getter de la clase padre rehusada en la clase hija




//Ejemplo 10: Overrinding methods

class Explorer {
    constructor(name, username, mission) {        
        this.name = name;
        this.username = username;
        this.mission = mission;
    }

    getNameAndUsername() {
        return `Explorer ${this.name}, username ${this.username}`;
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle) {
        super(name, username, mission); //SUPER nos ayudará a llamar el constructor padre
        this.cycle = cycle; //Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
    }

    getGeneralInfo() {
        let nameAndUsername = this.getNameAndUsername(); //Llamamos el método de la clase padre
        //nameAndUsername es una variable de esta función, no necesitas usar this para referenciarla.
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
}

const viajero1 = new Viajero("Sergio", "LaunchX", "Node JS", "Abril 2022");
console.log("Ejemplo 10: Overrinding methods");
console.log(viajero1);
console.log(viajero1.getNameAndUsername()); //Método de la clase padre
console.log(viajero1.getGeneralInfo()); //Método de la clase hija