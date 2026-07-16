 function greedAlgorithm(resolved, required, k){
    if(resolved.length!==required.length){
        throw new Error("Array nust have same length")
    }
    let needed=[]
    for(let i=0; i<resolved.length;i++){
        let diff=resolved[i]-required[i]
        needed.push(Math.max(0, diff))
    }
    needed.sort((a,b)=>a-b)
    let count=0
    for(let cost of needed){
        if(k>=cost){
            k-=cost
            count++
        }
        else{
            break
        }   
    }
    return count
    
 }
console.log(greedAlgorithm([2, 3, 4], [5, 2, 6], 5));