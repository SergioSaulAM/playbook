class User {
    constructor(user_name, gender, birthday, placeUserLives, userJob, userMobileNumber, userEmail) {
        this.user_name = user_name;
        this.gender = gender;
        this.birthday = birthday;
        this.placeUserLives = placeUserLives;
        this.userJob = userJob;
        this.userMobileNumber = userMobileNumber;
        this.userEmail = userEmail;
    }
}

const UserSerch = new User("Serch Acevedo", "Male", "23/05/2002", "Querétaro", "None", "4275419816", "email@email.com");

console.log(UserSerch);