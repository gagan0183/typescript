// const person: {
//     name: string;
//     canada: [number, string]
// } = {
//     name: 'Gagan',
//     canada: [1, 'EDMONTON']
// };
// person.canada = [1, 'EDMONTON', ''];
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["EDITOR"] = "EDITOR";
    Role["VIEWER"] = "VIEWER";
})(Role || (Role = {}));
console.log(Role.ADMIN);
