class BrotherInfo {
  _name: string = "Sarthak";
  _email: string = "sarthak@gmail.com";

  //   Getter ( for get the value after adding some info )
  get name(): string {
    return "Hello " + this._name;
  }

  /* Setter ( set value only not getting the value, if you want
     to get value make a getter or directly use main class data ) */
  set email(value: string) {
    this._email = "rathore" + value;
  }
}

var sarthakInfo = new BrotherInfo();
console.log(sarthakInfo.name);

sarthakInfo.email = sarthakInfo._email;
console.log(sarthakInfo._email);
