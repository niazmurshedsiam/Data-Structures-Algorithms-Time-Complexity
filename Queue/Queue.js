class Queue {
   constructor(){
       this.queue = [];
   }
   enQueue(value){
       this.queue.push(value);
   }
   deQueue(){
       if(this.queue.length){
           return this.queue.shift();
       }
   }

}

const FriendList = new Queue();
FriendList.enQueue('Abir');
FriendList.enQueue('Arafat');
FriendList.enQueue('Sohel');
console.log(FriendList);
const removeFriend = FriendList.deQueue();
console.log(removeFriend);
console.log(FriendList);