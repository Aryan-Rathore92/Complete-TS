/*
=> Omit
=> Exclude
=> Extract
=> NonNullable
=> Record
*/

// Omit (छोड़ देना) [ You can set which property is not required through omit ]
interface SchoolData {
  name: string;
  rollNo: number;
  location: string;
  stream: string;
}

var SchoolStudent1: Omit<SchoolData, "location" | "stream"> = {
  name: "Devansh",
  rollNo: 20,
};
// console.log(SchoolStudent1);

// Exculde (निकालना) [ You can set property which do you do not want to take/use ]

type APIStatus = "Complete" | "Pending" | "Loading" | "Error";

var APICall: Exclude<APIStatus, "Pending"> = "Complete";
APICall = "Loading";
APICall = "Error";
// APICall = "Pending"; // That is not allow because that is exclude
// console.log(APICall);

// Extract [ You can extract important properties which do you want to use ]
type APIStatus2 = "Complete" | "Pending" | "Loading" | "Error";

var APICall2: Extract<APIStatus2, "Complete" | "Error">;
APICall2 = "Error";
APICall2 = "Complete";
// APICall2 = "Loading"; // That is not allow beacuse you have only two extract properties like - Complete , Error
// console.log(APICall2);

// NonNullable [ Exclude null and undefined from T (It does not take undefined and null as value )]
type RandomType = string | number | null | undefined | boolean;

var checkType: NonNullable<RandomType>;
checkType = "Aryan";
checkType = 20000;
checkType = false;
// checkType = null; // that will give error beacuse null or undefined is not allow
// console.log(checkType);

// Record [ Record<K, T> means an object whose keys are K and whose values are T ]

type SiteRole = "admin" | "user" | "guest";
var SiteRoleName: SiteRole = "user";
var ConvertValuesinKeys: Record<SiteRole, string> = {
  admin: "Aryan",
  user: "Sarthak",
  guest: "Aryan",
  // guest: 100, // Not allow beacuse it only accept string
};
// console.log(ConvertValuesinKeys);

var devanshData: Record<"name" | "school" | "city", string> = {
  name: "Devansh Rathore",
  school: "KPS",
  city: "MZN",
};
console.log(devanshData);
