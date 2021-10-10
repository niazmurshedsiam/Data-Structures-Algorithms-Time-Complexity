// const friendName = [];
// friendName.push('Asif');
// friendName.push('Rafsan');
// friendName.push('Bappy');
// friendName.push('Abir');
// console.log(friendName);
// friendName.pop();
// friendName.pop();
// console.log(friendName);

class Stack {
    constructor(){
        this.stack = [];
    }
    add(friends){
        this.stack.push(friends);

    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const friendList = new Stack();
friendList.add("Karim");
friendList.add("Arafat");
friendList.add("Kamran");
friendList.add("Arman");
friendList.remove();
console.log(friendList);

