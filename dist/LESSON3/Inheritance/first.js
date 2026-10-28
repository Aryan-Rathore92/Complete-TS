export class Auth {
    login(mobileNo, password) {
        if (mobileNo && password) {
            return `Logged in succesfully with mobile no ${mobileNo} and password ${password}`;
        }
        else {
            throw new Error("Email and password is required");
        }
    }
}
class StudentData extends Auth {
    result(marks) {
        return `You have passed exam with the number ${marks}`;
    }
}
var s1 = new StudentData();
console.log(s1.login(123, "aryan@123"));
class TeacherData extends Auth {
    subject(subject) {
        return `Teacher teaches that the subject is ${subject}`;
    }
}
var s2 = new TeacherData();
console.log(s2.login(11111111, "111111111"));
