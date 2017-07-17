var _ = require("lodash");
var people = [{
  "id": 1,
  "first_name": "Charmian",
  "last_name": "Bratten",
  "email": "cbratten0@aboutads.info",
  "gender": "Female",
  "ip_address": "119.254.74.254"
}, {
  "id": 2,
  "first_name": "Nita",
  "last_name": "Wyeth",
  "email": "nwyeth1@army.mil",
  "gender": "Female",
  "ip_address": "13.33.242.202"
}, {
  "id": 3,
  "first_name": "Randee",
  "last_name": "Shirt",
  "email": "rshirt2@nifty.com",
  "gender": "Female",
  "ip_address": "223.201.213.49"
}, {
  "id": 4,
  "first_name": "Lilllie",
  "last_name": "Spindler",
  "email": "lspindler3@godaddy.com",
  "gender": "Female",
  "ip_address": "147.114.13.180"
}, {
  "id": 5,
  "first_name": "Thadeus",
  "last_name": "Toal",
  "email": "ttoal4@tripod.com",
  "gender": "Male",
  "ip_address": "180.166.42.36"
}, {
  "id": 6,
  "first_name": "Nefen",
  "last_name": "Gillitt",
  "email": "ngillitt5@typepad.com",
  "gender": "Male",
  "ip_address": "84.200.98.220"
}, {
  "id": 7,
  "first_name": "Kassia",
  "last_name": "Allberry",
  "email": "kallberry6@cpanel.net",
  "gender": "Female",
  "ip_address": "30.78.83.121"
}, {
  "id": 8,
  "first_name": "Willabella",
  "last_name": "Clemens",
  "email": "wclemens7@usnews.com",
  "gender": "Female",
  "ip_address": "130.89.41.84"
}, {
  "id": 9,
  "first_name": "Rudolfo",
  "last_name": "Bazley",
  "email": "rbazley8@google.ca",
  "gender": "Male",
  "ip_address": "134.32.37.91"
}, {
  "id": 10,
  "first_name": "Diarmid",
  "last_name": "Chyuerton",
  "email": "dchyuerton9@bbc.co.uk",
  "gender": "Male",
  "ip_address": "140.255.138.23"
}, {
  "id": 11,
  "first_name": "Marilin",
  "last_name": "Dufton",
  "email": "mduftona@qq.com",
  "gender": "Female",
  "ip_address": "122.84.10.160"
}, {
  "id": 12,
  "first_name": "Danielle",
  "last_name": "McMickan",
  "email": "dmcmickanb@nifty.com",
  "gender": "Female",
  "ip_address": "203.176.130.91"
}, {
  "id": 13,
  "first_name": "Quinlan",
  "last_name": "Kleinhausen",
  "email": "qkleinhausenc@wikimedia.org",
  "gender": "Male",
  "ip_address": "132.20.110.94"
}, {
  "id": 14,
  "first_name": "Waldemar",
  "last_name": "Bradder",
  "email": "wbradderd@sciencedirect.com",
  "gender": "Male",
  "ip_address": "1.34.124.120"
}, {
  "id": 15,
  "first_name": "Marijn",
  "last_name": "Dussy",
  "email": "mdussye@ucoz.com",
  "gender": "Male",
  "ip_address": "227.220.193.63"
}, {
  "id": 16,
  "first_name": "Ulric",
  "last_name": "Grunbaum",
  "email": "ugrunbaumf@ca.gov",
  "gender": "Male",
  "ip_address": "110.20.253.22"
}, {
  "id": 17,
  "first_name": "Sheffie",
  "last_name": "Haysey",
  "email": "shayseyg@alexa.com",
  "gender": "Male",
  "ip_address": "25.217.210.157"
}, {
  "id": 18,
  "first_name": "Mildrid",
  "last_name": "Duplain",
  "email": "mduplainh@angelfire.com",
  "gender": "Female",
  "ip_address": "77.248.99.17"
}, {
  "id": 19,
  "first_name": "Leontine",
  "last_name": "Abys",
  "email": "labysi@blogtalkradio.com",
  "gender": "Female",
  "ip_address": "41.108.58.68"
}, {
  "id": 20,
  "first_name": "Glenda",
  "last_name": "Sisnett",
  "email": "gsisnettj@xinhuanet.com",
  "gender": "Female",
  "ip_address": "172.125.26.254"
}];
var femaleCount = _.filter(people,{gender:"Female"}).length;
console.log(femaleCount);
console.log("Female count "+femaleCount);
var halfPeople = _.chunk(people,2);
console.log("chunk",halfPeople);
var arrWithFalsey = [0,1,false,2,'',3];
console.log("combact",_.compact(arrWithFalsey));
var arrayData = [1];
var other = _.concat(arrayData,2,[3],[[4]]);
console.log("Other",other);
var diff = _.difference([2,1],[2,3]);
console.log("DIfference",diff);