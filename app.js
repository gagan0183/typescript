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
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["EDITOR"] = 1] = "EDITOR";
    Role[Role["VIEWER"] = 2] = "VIEWER";
})(Role || (Role = {}));
console.log(Role.ADMIN);
