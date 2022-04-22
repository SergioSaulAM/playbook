const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

/*
Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
Imprime el stack de cada explorer, usa FOR EACH
Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
Busca el primer explorer que sea de la CDMX, usa FIND
Obtén la suma de todos los exercises_completed, usa REDUCE
Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
*/

console.log("1. Imprimir el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH");
explorers.forEach(a => console.log(a.name));

console.log("2. Imprimir el stack de cada explorer, usa FOR EACH");
explorers.forEach(a => console.log(a.stack));

console.log("3. Crear una nueva lista con las listas de stacks de cada explorer, usa MAP");
const explorersStack = explorers.map(a => a.stack);
console.log(explorersStack);

console.log("4. Obtener la lista de explorers que tengan en su stack js, usa FILTER (para validar un elemento en un lista se usa el método includes)");
const explorersIncludesJS = explorers.filter(a => a.stack.includes('js'));
console.log(explorersIncludesJS);

console.log("5. Buscar el primer explorer que sea de la CDMX, usa FIND");
const explorerCDMX = explorers.find(a => a.city == 'CDMX');
console.log(explorerCDMX);

console.log("6. Obtener la suma de todos los exercises_completed, usa REDUCE");
const explorerExercisesCompleted = explorers.reduce((acc, element) => acc + element.exercises_completed, 0);
console.log(explorerExercisesCompleted);

console.log("7. Obtener la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME");
const explorerExercisesFinished = explorers.some(a => a.missions.frontend.exercisesFinished === true);
console.log(explorerExercisesFinished);

console.log("8. Obtener la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.");
const explorerIsFinished = explorers.every(a => typeof a.missions.onboarding.isFinished == true);
console.log(explorerIsFinished);