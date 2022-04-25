const Spiderman = require('../app/spiderman');
describe("Unit Tests for Spiderman class", () => {
  test("1) Create an spiderman object", () => {
    //Aquí escribimos el código que queremos usar tal cuál
    //Quiero poder instanciar un objeto Spiderman con esta información
    const andrewGarfield = new Spiderman("The Amazing Spider-Man", 31, "Andrew Garfield", 2, "Sony");

    //Validamos que este código funcione de la forma esperada
    expect(andrewGarfield.name).toBe("The Amazing Spider-Man");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe("Sony");
  });

  test("2) Use the method getInfo()", () => {
    const tomHolland = new Spiderman("SpiderMan Marvel", 25, "Tom Holland", 5, "Marvel Studio");
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio");
  })
});
