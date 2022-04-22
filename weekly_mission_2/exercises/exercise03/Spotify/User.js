class User {
    constructor(name, email, birthday, country, plan, paymentMethod) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.country = country;
        this.plan = plan;
        this.paymentMethod = paymentMethod;
    }
}

const User1 = new User("Juanito Banana", "email@email.com", "23-05-2002", "Mexico", "Premium", "Debit Card");

console.log(User1);