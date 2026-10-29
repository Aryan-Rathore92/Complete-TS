/*
 1. why static keyword --> Use to define static property and methods, Memory Efficency, Utility Methods, Global constants
 2. Advantage of static keyword
 3. How to use static property
 4. How to use Static function
*/

// static keyword only associate with class neither associate with object nor with this keyword
// static property will not use by methods and static methods can not use properties
class StaticKeyword {
  static checkName: string = "Google";

  getCompanyName() {
    // return this.checkName; // ( Does not allow with access data with this keyword incase static keyword )
    return "Apple";
  }
}

var static1 = new StaticKeyword();
// console.log(static1); // static keyword does not allow to use methods and peroperties with instance
console.log(StaticKeyword.checkName); // Google // [ Only static keyword allow with className not with instance]
console.log(static1.getCompanyName());
