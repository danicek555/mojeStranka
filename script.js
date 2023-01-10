console.log("Učíme se javascript!")

                                                                                    // DANOVA UČEBNICE

// Slovicka - cesko to english

// const slovicka = {

// }

// const englishWords = ["hello", "dog", "cat"]
// const czechWords = ["ahoj", "pes", "kocka"]
// const spanishWords = ["hola", "perro", "gato"]

// Map of words
// English index = 0
// Czech index = 1
// Spanish index = 2
const words = [
    ["hello", "ahoj", "hola"],
    ["dog", "pes", "perro"],
    ["cat", "kocka", "gato"],
    ["house", "dum", "casa"]
]

const f = function () {

}

const tableDiv = document.getElementById('words');
render();

function render() {
    tableDiv.innerHTML = `<tr>
        <th>English</th>
        <th>Czech</th>
        <th>Spanish</th>
    </tr>`;

    words.forEach((word) => {
        const tr = document.createElement('tr');
        word.forEach((wordInLanguage) => {
            const td = document.createElement('td');
            td.innerText = wordInLanguage;
            tr.appendChild(td)
        })
        tableDiv.appendChild(tr)
    })
}

// Map of words
// English index = 0
// Czech index = 1
// Spanish index = 2
// const mapa = [
//     [0, 1, 0]
//     [1, 0, 1]
// ]

const sort = document.getElementById('sort');
sort.addEventListener('click', () => {
    words.sort();
    render();
})

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                //Proměnné a vypisování do konzole
let firstName = "Dan"
let secondName = "Mitka"
let city = "Čelákovice"
console.log(firstName,secondName,city)
console.log("Čus jmenuju se: " + firstName + " "+ secondName + ", a bydlím ve městě: " + city)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                //Proměnné a počítání s nimi
let age = 14
console.log(age)
console.log("Čau tady " + firstName + " je mi " + age)
age = age + 5
console.log("A za pět let mi bude " + age)

let student1 = 20
let student2 = 40
let student1Name = 'Petr'
let student2Name = 'Adam'
let maxPoints = 100
let student1Procenta = (student1 / maxPoints) * 100
let student2Procenta = (student2 / maxPoints) * 100
console.log(student1Name + ' dosáhl(a) ' + student1Procenta + '% uspesnosti')
console.log(student2Name + ' dosáhl(a) ' + student2Procenta + '% uspesnosti')

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                   //Boolean (prava, nepravda)
let vek = 5655
let child = vek < 18
let adult = vek >= 18
let pensioner = vek >= 65
console.log("Dítě: " + child)
console.log("Dospělý: " + adult)
console.log("Důchodce: " + pensioner)
    /* 
    === rovná se
    !== nerovná se
    < menší než (<=)
    > větší než (>=)
    */

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                        //FUNKCE

let naDruhou = function(name = "anonymní", cislo = 12){
    console.log("Jméno: " + name + " Číslo: " + cislo * cislo)
    return 
}

let naDruhouPlusVypis= function(cislo = 12){
    let x = cislo *cislo 
    console.log(" Číslo: " + x)
    return
}

let value = naDruhou(undefined, 5)
console.log(value)

naDruhouPlusVypis(50)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                            //IF ve FUNKCI a více parametrů

let prvniCislo = 7
let druheCislo = 3
let tretiCislo = 9

let kod = function(a,b,c){
    if(a === prvniCislo && b === druheCislo && c === tretiCislo ){
         console.log("Můžete vstoupit")
    } else {
        console.log("Nemůžete vstoupit")
    }

}
kod(5,4,9)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                //Template String

let firstName2 = "Harry"
let secondName2 = "Potter"
let age2 = 15
let firstFriend = "Ron"
let secondFriend = "Hermiona"

console.log(`Ahoj, jmenuji se ${firstName2} ${secondName2} a je mi ${age2}. Moji pratele jsou ${firstFriend} a ${secondFriend}.`)

let movie = "Ospala dira"
let director = "Tim Burton"
let award = "nejlepsi vykon ve vyprave"

console.log(`Videl jsem film ${movie}, kterz reziroval ${director}. Tento film ziskal oceneni ${award}.`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                //OBJEKTY A VYPISOVANI

let person1 = {
    jmeno: "Dan",
    vek: 14,
    mesto: "Celakovice",
    gender: "male"
}
console.log(`Jmenuji se ${person1.jmeno}. Je mi ${person1.vek}. Ziju v ${person1.mesto}`)

let person2 = {
    jmeno: "Robert",
    vek: 52,
    mesto: "Celakovice Jirina",
    gender: "male"
}
console.log(`Jmenuje se ${person2.jmeno}. Je mu ${person2.vek}. Zije v ${person2.mesto}`)

let person3 = {
    jmeno: "Pavla",
    vek: 49,
    mesto: "Celakovice Sedlcanky",
    gender: "female"
}
console.log(`Jmenuje se ${person3.jmeno}. Je ji ${person3.vek}. Zije v ${person3.mesto}`)

let personInfo = function(person){
    if(person.gender === "male"){
    console.log(`${person.jmeno} a ${person.vek} a ${person.mesto}`)
} else if (person.gender === "female"){
    console.log(`${person.jmeno} cus ${person.vek} a ${person.mesto}`)
} 
}
personInfo(person1)
personInfo(person2)
personInfo(person3)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                    //OBJEKTY S FUNKCÍ A RETURN

let vladniNarizeni = true
let school = {
    type: "gymnazium",
    street: "Na prikope",
    city: "Praha",
    capacity: 600,
    open: function(){
        console.log(`Skola ${this.type} ${this.street} je otevrena`)
    },
    closed(){
       let closedInfo = `Skola ${this.type} ${this.street} je uzavrena `
       return closedInfo
    }
}
school.open()

let resultSchool = school.closed()
console.log(resultSchool)


if(vladniNarizeni){
    school.open()
} else {
    console.log(resultSchool)
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                //String Methods a Properties
                                                                 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let password = "KFKFKFKFfjen1234kkjk"

if(password.length > 13 ){
    console.log("Velmi silne heslo")

} else if(password.length >= 8 && password.length<= 13 ){
console.log("Silne heslo")
} else if(password.lenght < 8){
console.log("Slabe heslo")
} 

if(password.includes(1234)){
    console.log("Heslo nesmi obsahovat 1234")
} else{
    console.log("Heslo je v poradku")
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                //Number Methods a Properties Math
                                                            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
        
        //Zaokrouhlování na desetinná místa
        let number = 5.5656
        console.log(number.toFixed(3))
        console.log(Math.round(number))
        console.log(Math.floor(number))
        console.log(Math.ceil(number))

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                    //Obarvení textu v konzoli

        console.log("%c Tento text je barevny", "color: #db0000; font-weight:bold; background:#fff;")
        //musí to začínat %c a po daném textu , a pak do uvozovek píšete CSS