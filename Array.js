let arrMax=[10,20,30,40,50];
let max=arrMax[0];
arrMax.forEach((arrMax)=>{
    if(arrMax>max)
    max=arrMax;
});
console.log(max);



     //using map
    let list=[1,2,3,4,5,6,7,8,9,10];
    let adjustedList=[];

    list.forEach(
        (element,index,list)=>{
            console.log(element,index,list)
        }
    )

    adjustedList=list.map(
        (element,index,list)=>{
            return element*10;
        }
    );
    console.log(adjustedList)


    
    //sum of even numbers in the array
    let numStr=[1,2,3,4,5,6,7,8,9]
    const sumEvens=(numStr)=>{
        let sum=0;
        for(let i=0;i<=numStr.length;i++){
            if(numStr[i]%2==0){
               sum=sum+numStr[i];
               
            }
        }
        return sum;
    }
     console.log(sumEvens(numStr));
 

    //reduce method
    let numbers = [4, 2, 10, 203, 53, 11];
    let result=numbers.reduce((a,b) => Math.min(a,b));
    console.log(result);