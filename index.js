

let odd = 'australia'
let even = 'canada'

const getMiddle = async (word) => {
  
    let middle = ''

    if( word.length % 2 == 0 ){
        middle = word[ word.length / 2 - 1  ] + word[ word.length / 2]


    }else{
        console.log( word.length / 2)
        middle = word[ Math.floor(word.length / 2) ]
    }


    console.log(middle)
    return middle
}   



const naiveGetMaxOr = (lo, hi, k ) =>{
 
    let maxXor = 0;
 
    // Calculating xor of each pair
    for (let i = lo; i < hi; i++) {
        for (let j = lo + 1; j < hi; j++) {
            const m = Math.max(maxXor, i ^ j)
            maxXor =  m <= k ? m : maxXor
        }
    }
    return maxXor;
}


class TrieNode{
    constructor(){
        this.children = {}
    }
}
 
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert (n) { 
        let temp = this.root
        let i = 7
        while(i >= 0){
            const bit = (n >> i) & 1
            if (!temp.children[bit]) temp.children[bit] = new TrieNode()
            temp = temp.children[bit]
            i -= 1
        }
    }
    maxXor (value, k) {
        let temp = this.root
        let current = 0
        let i = 7
        while (i >= 0){
            //uzima s desna bitove
            const bit = (value >> i) & 1
            const kbit = ( k >> i ) & 1

            if (temp.children[bit ^ kbit]){
                //spusta se ako moze da dobije k bit 
                temp = temp.children[bit ^ kbit]
                current += (1 << i)
            }
            //ako ne onda mozemo samo da se spustimo tamo dje je bit == 0 jer on ne prelazi maks
            else if ( bit == 0) temp = temp.children[bit]
            // ako ga nema vracemo trenutni maks 
            else return current
            i -= 1
        }
        return current
    }
}

// k binary = 0 0 0 0  length 4

const betterSolutionMaxXor = (lo, hi, k) => {

    let trie = new Trie()
    let max = 0
    trie.insert(lo)

    for(let i = lo+1; i <= hi; i++){

        max_val = Math.max(trie.maxXor(i, k), max)

        trie.insert(i)

    }
    return max_val
}



(async()=>{
  await getMiddle(odd)
  await getMiddle(even)
})()