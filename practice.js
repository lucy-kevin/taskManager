function minuteSeven(num){
    return num - 7;
    
}

console.log(minuteSeven(10))


function nextInLine(arr, item){
    arr.push(item);
    arr.shift();
    return item;
}



var textArr = [1,2,3,4,5];
console.log("before: " + JSON.stringify(textArr));
console.log(nextInLine(textArr,6));
console.log("After: " + JSON.stringify(textArr));


 //boolean

 function trueOrFalse(isThatTrue){
    if(isThatTrue){
        return "Yes, that was true";
    }
    return "No, that aint true";
 }

 console.log(trueOrFalse(true));


 function ageCompare(age){
    if(age<5){
        return "tiny";
    }
    else if(age<10){
        return "small";
    }
    else if(age < 15){
        return " medium";
    }
    else if(age<20){
        return " Large";
    }
    return "Huge";
 }

 console.log(ageCompare(54));




 // switch statements
 function caseInSwitch(val){

    var answer = ""
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
        case 5:
            answer = "delta";
            break;
        default:
            answer ="wrong input";
            break;

    }
    return answer;
    
 }
 console.log(caseInSwitch("u"));
 console.log(caseInSwitch(3));
 console.log(caseInSwitch(5));




 var count = 0;

function countCard(cc){

    switch(cc){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
    
            count++;
            break;
        case 10:
        case "J":
        case "K":
        case "Q":
        case "A":
            count--;
            break
    }

    



var holdCard = "hold";
if(count > 0){
    return "bet";
}
return count + " " + holdCard;
}
countCard(1);
countCard(2);
countCard("A");
countCard("K");
countCard("K");
countCard(1);

console.log(countCard(1))



//OBJECT

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "the drink": "water",
    19: "Unites"

}

var hatValue = testObj.hat;//dot notation

console.log(hatValue);


var drinkValue = testObj["the drink"];

console.log(drinkValue);//bracket Notation
var playerNo = 19;

console.log(testObj[playerNo]);

testObj.shirt = "bokdh";//updating
console.log(testObj.shirt);

testObj.bark ="bow-wow";//adding a property
console.log(testObj.bark);


delete testObj.shoes;//deleting

console.log(testObj.shoes); 



//store flexible data
//this is a array with objects inside
var myMusic = [
    {
        "artist":"Billy Joel",
        "title":"Piano Man",
        "release_year": 1973,
        "formats":["CD","8T","LP"],
        "gold":true}

    ,
    {
        "artist":"Beau Carnes",
        "title":"Cereal Man",
        "release_year": 2003,
        "formats":["YouTube","8T","LP"],
        "gold":true}

    
];


console.log(myMusic[1].artist);


var myStorage ={
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat":"crumbs"
        },
        "outside": {
            "trunk:": "jack"
        }
        
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);



//ACCESSING NESTED ARRAYS

var myPlants = [{
    type: "fruits",
    list:["oranges",
          "apples",
           "bananas" ]
}, 
{
    type: "vegetables",
    list:["sukuma wiki",
        "dodo",
        "nakati"]
}
];

var secondTree =myPlants[1].list[1];
console.log(secondTree)





var collection ={
    "2548": {
        "album": "Slippery When wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let if Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks":[]
    },
    "5439":{
        "album": "ADDA gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if(value === ""){

        delete collection[id][prop];

    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
         collection[id][prop] =value;
    }

    return collection;
}

updateRecords(2468, "tracks", "test")
console.log(updateRecords(5439,"artist","ABBA"));


