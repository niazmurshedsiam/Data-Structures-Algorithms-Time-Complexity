class Dictionary{
    constructor(){
        this.dictionary = {}
    }
    add(key,value){
        this.dictionary[key]=value;
    }
    get(key){
        return this.dictionary[key];

    }
}

const phoneBook = new Dictionary();
phoneBook.add("Karim","01984646547");
phoneBook.add("Abir","01984646547");
phoneBook.add("Kamrul","01984646547");
console.log(phoneBook.dictionary);
const member = phoneBook.get("Karim");
console.log(member);