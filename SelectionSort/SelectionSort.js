const numbers = [4,66,77,-5,-1,22,4];
function SelectionSort(array){
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j]<array[min]){
                min = j;
            }
            
        }
        const temp = array[i];
        array[i] = array[min];
        array[min]=temp;

        
    }
    return array;
}
const friendList = SelectionSort(numbers);
console.log(friendList);