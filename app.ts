// exercise 1
let places: string[] = ['new york','amrica','canda','austrlia','dubai']
 console.log('Original ' + places);
console.log('Copy ' + [...places].sort());
console.log('Original ' + places);
console.log('Copy ' + [...places].sort().reverse().reverse());
console.log('Copy ' + [...places].sort().reverse());
console.log('Original ' + places.sort());
console.log('Original ' + places.sort().reverse());
places.splice(0,2)

// exercise 2

let personName: string="ERIC";
console.log(`Hello ${personName},Would you like to learn some python today?`);

// exercise 3

//lower case 
let personName: string="Hamza"
console.log("lowercase:", personName.toLowerCase());

// Upper case
console.log("uppercase:", personName.toLocaleUpperCase());

//Title Case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

// exercise 4

let qoute: string="A person who never made a mistake never tried anything new";
let author: string="Albert Einstein"
console.log(`${author} once said,"${qoute}`);

// exercise 5

let qoute: string= "A person who never made a mistake never tried anything new";
let famous_person="Albert Einstein";
let message=`${famous_person} once said, ${qoute}`;
console.log(message);

// exercise 6

let personName:string =`\n\t BABAR AZAM\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

// exercise 7& 8

console.log(5 +3);
console.log(11 -3);
console.log(4 *2);
console.log(16 / 2);

// exercise 9

let favouriteNumber: number = 4;
console.log(`My favourite number is ${favouriteNumber}`);

// exercise 10

// my name is Ali Hamza
// Dated: 23/03/2024
this program will run simple code just like hello world
console.log("hello world simple program");
 

//EXERCSIE 11
let members: string[]=[`imran`,`aezaz`,`abbas`,`ali`,`naved`];
for(let i=0; i<members.length; i++){
   console.log(members[i]);
}

//EXCERSIE 12
let members: string[]=[`imran`,`aezaz`,`abbas`,`ali`,`naved`];
let message: string=`kal birthday party hai kis ki anoushy ki:`;
for(let i=0; i<members.length; i++){
     console.log(message + members[i]);
}

//EXCERSIE 13

let transportation : string [] = [`civic`,`bike`,`bus`,`suzuki`,`mazda`,`bmw`,];
for(let i=0; i<transportation.length; i++){
    console.log(`I wound like to own a ` + transportation[i]);
}

//EXCERSIE 14

let guest_list : string [] = ['Ali','Farhan','Raza','Ayesha'];
for(let i=0; i<guest_list.length; i++){
console.log('Respected Sir/Madam ' +guest_list[i] + ',\nwe invited you on diner tomorrow.n\n thank you')
}
export {guest_list
}

//EXCERSIE 15

let guest_list : string [] = ['haris','shaista','naveed','fawaad'];
for(let i=0; i<guest_list.length; i++){
console.log('Respected Sir/Madam ' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\n\nThank You')    
}
let not_present : String = 'fawaad';
let  new_guest : string = ' Naseem Shah';
guest_list[3] = new_guest
for(let i=0; i<guest_list.length; i++){
console.log('Respected Sir/Madam ' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\n\nThank You')    
}
console.log(`Mr. ${not_present} will not coming tomorrow.`)   
export{guest_list}

//EXCERSIE 16

let guest_list : string [] = ['haris','shaista','naveed','fawaad'];
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\n\nThank You')    
// }
let not_present : String = 'fawaad';
let  new_guest : string = ' Naseem Shah';
guest_list[3] = new_guest
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\n\nThank You')    
// }
guest_list.unshift('Amir','Babar Azam','Imad Waseem',);
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow. we found big table to decide to invit 3 more guest\n\nThank You')    
//     }
console.log('\nUnfortunately we can not arrange big table , Only Two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`); 
}
for(let i=0; i<guest_list.length; i++){
console.log('Respected Sir/Madam ' + guest_list[i] + ',\nyes you are still invited on tomorrow dinner.\n\nThank You')    
}
guest_list.splice(0,2)
console.log(guest_list)

//EXCERSIE 17

let guests: string[] = ["ali","danish","hira","samra","Abrish"];
console.log("Due to limited space, only two people can be invited for dinner.")
while (guests.length > 2){
    const removedguest = guests.pop();
    console.log(`sorry, ${removedguest},you're no longer invited to dinner.`);
}

guests.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.pop();
guests.pop();
console.log("Final guest list:", guests);


//EXCERSIE 18

let placesToVist: string[] = ["Tokyo","Pakistan","America","China","Japan"];
// console.log("Orignal Order:", placesToVist);
console.log("alphabetical order:", [...placesToVist].sort());
console.log("Orignal order after sorting:", placesToVist);
console.log("Reverse alphabetical order:", [...placesToVist].sort().reverse());
console.log("Orignal order after reverse sorting:", placesToVist);
placesToVist.reverse();
console.log("Reversed order:", placesToVist);
placesToVist.reverse();
console.log("Back to orignal order:", placesToVist);
placesToVist.sort();
console.log("sorted in to  alphabetical order:", placesToVist);
placesToVist.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placesToVist);


//EXCERSIE 19

let invitations : string [] = ["ali","bilal"]
let count_invitaions : number = invitations.length

console.log(`${count_invitaions} people will come to the dinner.`)

//EXCERSIE 20

let languages : string [] = ['english','urdu','hindi','french','arabic']
console.log("list of languages:")
for(let top of languages){
    console.log(top)
}

//EXCERSIE 21

interface item {
    name:string
    Price:number
}
const book: item ={
    name: 'ESSENTIAL TYPESCIRPT',
    Price:450, 
}
const Magzzine: item ={
    name: 'Magzzine',
    Price: 250,
}
console.log(`book name: ${book.name},price: $${book.Price}`)
console.log(`Magzzine name: ${Magzzine.name},price: $${Magzzine.Price}`)
//EXCERSIE 22

let array: (string | number) [] = ['babar','taha',3,5,8,'abrish']
console.log(array[5])


//EXCERSIE 23

let cars: string = 'subaru';
console.log("Is car == 'subaru'? I predict true.");
console.log(cars == 'subaru');
console.log("Is car === 'subaru'? I predict true.");
console.log(cars === 'subaru');
console.log("Is car != 'subaru'? I predict false.");
console.log(cars != 'subaru');
console.log("Is car !== 'subaru'? I predict false.");
console.log(cars !== 'subaru');
console.log("Is car < 'subaru'? I predict false.");
console.log(cars < 'subaru');
console.log("Is car > 'subaru'? I predict false.");
console.log(cars > 'subaru');
console.log("Is car <= 'subaru'? I predict true.");
console.log(cars <= 'subaru');
console.log("Is car >= 'subaru'? I predict false.");
console.log(cars >= 'subaru');
console.log("Is car? I predict true.");
console.log(cars);
console.log("Is !car? I predict false.");
console.log(!cars);


//EXCERSIE 24

let car: string = 'subaru';
let age: number = 25;
let numbers: number[] = [1,2,3,4,];
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru');
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota');
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');
console.log("Is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase());
console.log("Is age == 25? I predict true.");
console.log(age == 25);
console.log("Is age != 30? I predict true.");
console.log(age != 30);
console.log("Is age > 30? I predict false.");
console.log(age > 30);
console.log("Is age <= 25? I predict true.");
console.log(age <= 25);
console.log("Is age > 20 && age < 30? I predict ture.");
console.log(age > 20 && age < 30);
console.log("Is age > 30 || age < 18? I predict fulse.");
console.log(age > 30 || age < 18);
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers);
console.log("Is 5 not in numbers? I predict true.");
console.log(5 in numbers);

//EXCERSIE 25

let aliein_color: string = "green";

if(aliein_color == "green"){
    console.log("the player just earned 5 points.");
}

let aliein_color = "red";

if (aliein_color == "green"){
    console.log("the player just earned 5 points.");
}
    

//EXCERSIE 26

let aliein_color: string = "green";

if(aliein_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}


else{
    console.log("the player just earned 10 points.");
}

aliein_color = "red"

if(aliein_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}

//EXCERSIE 27

let alien_color: string = "green";

if(alien_color == "green"){
    console.log("the player earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("the player earned 10 points.");
}
else if(alien_color == "red"){
    console.log("the player earned 15 points.");
}
else{
    console.log("plase select right color.")
}
alien_color = "yellow";

if(alien_color == "green"){
    console.log("the player earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("the player earned 10 points.");
}
else if(alien_color == "red"){
    console.log("the player earned 15 points.");
}
else{
    console.log("plase select right color.")
}

alien_color = "red";

if(alien_color == "green"){
    console.log("the player earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("the player earned 10 points.");
}
else if(alien_color == "red"){
    console.log("the player earned 15 points.");
}
else{
    console.log("plase select right color.")
}


//EXCERSIE 28

let age: number = 25;
if(age<2){
    console.log("The person is a baby")
}
else if(age>=2 && age <4){
    console.log("The person is a toddler")
}
else if(age>=4 && age <13){
    console.log("The person is a kid")
}
else if(age>=13 && age <20){
    console.log("The person is a teenager")
}
else if(age>=20 && age <65){
    console.log("The person is a adult")
}
else{
    console.log("The person is a elder")
}

//EXCERSIE 29

let favorraite_fruits : string [] = ['apple','grapes','peech']

if(favorraite_fruits.includes('apple')){
    console.log('I really like apple!')
}

if(favorraite_fruits.includes('banana')){
    console.log('I really like banana!')
}

if(favorraite_fruits.includes('grapes')){
    console.log('I really like grapes!')
}

if(favorraite_fruits.includes('peech')){
    console.log('I really like peech!')
}

if(favorraite_fruits.includes('mango')){
    console.log('I really like mango!')
}

//EXCERSIE 30

let users : string [] = ['sana','babar','saba','taha','admin']

for(let user of users){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }

else{
    console.log(`Hello ${user},thank you for logging in again.`)
}
}

//EXCERSIE 31

let users : string [] = ['sana','babar','saba','taha','admin']
    if(users.length === 0){
        console.log("We need to find some users!")
    }

else{
users = [];
    console.log("All user have been removed " + users.length)
}

//EXCERSIE 32

let current_users: string[] = ["saba","admin","ahmed","babar","raza"];
let new_users: string[] = ["fawad","hussain","user7","admin","user9"];
new_users.forEach((newUser) => {
    if(
        current_users.some(    
(currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
)
) {
console.log(`${newUser} will need to enter a new username. `);
}else{
    console.log(`${newUser} is available.`);
}
});


//EXCERSIE 33

let myNumbers = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < myNumbers.length; i++){
    if(myNumbers[i] ==1){
        console.log(`${myNumbers[i]}st`);
    }else if(myNumbers[i] == 2){
        console.log(`${myNumbers[i]}nd`);
    } else if(myNumbers[i] == 3){
        console.log(`${myNumbers[i]}rd`);
}else if(myNumbers[i] >= 4 && myNumbers[i] <=9){
    console.log(`${myNumbers[i]}th`);
}
}

//EXCERSIE 34

let myPizza = ["cheeze Pizza","Pepperoni Pizza","vegeterian Pizza"]
for (let i = 0; i < myPizza.length; i++){
    console.log(myPizza[i]);
}
for (let i = 0; i < myPizza.length; i++){
    console.log(`I like to eat ${myPizza[i]}`);
}
console.log(
    `\nI really like to eat pizzas. Pizza comes in a verity of flavors and tropping, allowing individuals to customize it to thier liking`
);

//EXCERSIE 35

let Animals: string[] = ["dog", "cat" , "rat"];
Animals.forEach(Animal => {
    console.log(`A ${Animal} would make a great pet.`);
})
console.log("Any of these animals make a great pet!");

//EXCERSIE 36

function make_shirt(size: string, message: string){
    console.log(`Making a ${size} t-shirt with  the message "${message}" print on it. `);
}
make_shirt("medium","code is Life")

//EXCERSIE 37

function make_shirt(size: string = "Large" , message: string = "I Love typescript"){
    console.log(`Making a ${size} t-shirt with  the message "${message}" print on it. `);
}
make_shirt();
make_shirt("medium");
make_shirt("Small", "Dive into coding");

//EXCERSIE 38

function describe_city(Nameofcity: string, country: string = "pakistan"){
    return`${Nameofcity} is in ${country}`;
};
let city1 = describe_city("Multan","Pakistan");
let city2 = describe_city("islamabad","Pakistan");
let city3 = describe_city("Hyderabad","Pakistan");
let city4 = describe_city("Karachi","pakistan");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

//EXCERSIE 39

function city_country(city: string, country: string){
    console.log(`"${city}, ${country}`)
}

city_country("Karachi","pakistan");

let mycities = city_country("Karachi","pakistan");
console.log(mycities);


console.log(city_country("UAE","Dubai"));
console.log(city_country("United Kingdon","London"));
console.log(city_country("Riyaz","Suadia Arabia"));

//EXCERSIE 40

function Make_Album(artistname: string, albumTitle: string){
    return{artistname, albumTitle}
}
let Album1 = Make_Album("Ali", "Range-e-Mohbat");
let Album2 = Make_Album("Hyder", "Roshan Andhera");
let Album3 = Make_Album("Ayaz", "Mausam-e-Dil");
console.log(Album1);
console.log(Album2);
console.log(Album3);

function Make_Album2(artistname: string, albumTitle: string, numberoftracks?: number){
    return{artistname, albumTitle, numberoftracks}
}
let Album4 = Make_Album2("zafar", "Dil Ki Lagi", 30);
let Album5 = Make_Album2("Sajjad", "ajeeb khani", 55);
let Album6 = Make_Album2("Abrar Ul Haq", "Allah ho", 41);
console.log(Album4);
console.log(Album5);
console.log(Album6);

//EXCERSIE 41

function show_magicians(magicians: string[]): void {
   
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() +magician.slice(1));
    }
}
const magician: string[] = ["ali","hamza","bilal"];
show_magicians(magician)

//EXCERSIE 42

function show_magicians(magicians: string[]): void {
   
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() +magician.slice(1));
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
magicians[i] = magicians[i] + " the Great"
}
} 
const magicians2: string[] = ["ali","hamza","bilal"];
make_great(magicians2);
show_magicians(magicians2)


//EXCERSIE 43

function show_magicians(magicians: string[]): void {
   
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() +magician.slice(1));
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
magicians[i] = magicians[i] + " the Great"
}
} 
const magicians2: string[] = ["ali","hamza","bilal"];
make_great(magicians2);
show_magicians(magicians2)





function make_great2(magicians: string[]) {
    const greatmagicians :string[] = [];
for (let i = 0; i < magicians.length; i++) {
    greatmagicians.push(magicians[i] + ' the Great');
};
return greatmagicians;
}

const magicians3:string[] = ["ali","hamza","bilal"];
const greatmagicians2: string[] = make_great2(magicians3);

show_magicians(magicians3);
show_magicians(greatmagicians2);

//EXCERSIE 44

function sandwich(...items: string[]): void {
    console.log("sandwich order")

    for (let i = 0; i < items.length; i++){
console.log(`- ${items[i]}`)
    }
}
console.log("enjoy your sandwich with your friend")
sandwich('capsicum','tomato','chiken')

sandwich('beef','cheese')

sandwich('garlic chiken','mayo souce')

//EXCERSIE 45

type car = {
    manufacture: string
    model: string
    [key: string]: any;
    }
    
    function createcar(manufacture: string, model: string, optional: Record<string, any>): car {
        return{
            manufacture,
            model,
            ...optional
    
        }
    }
    
    const mycar: car = createcar("toyota", "corolla",{color: "silver", year: "2024"})
    console.log(mycar)
