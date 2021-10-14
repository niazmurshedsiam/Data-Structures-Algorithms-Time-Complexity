const numbers = [33,55,66,88,2,50,29];
function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j]<array[j+1]){
                let temp = array[j];
                array[j]= array[j+1];
                array[j+1] = temp;
            }
            
            
        }
        

    }
    return array;

}
const friendList = bubbleSort(numbers);
console.log(friendList);