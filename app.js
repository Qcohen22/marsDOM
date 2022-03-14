let arr = [".com", ".us", ".net", ".io"]

function combArrays(){
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = [".com", ".net", ".io", ".org",".etc"]

    for(let i = 0; i < pronoun.length; i++){
        for(let j = 0; j < adj.length; j++){
            for(let k = 0; k < noun.length; k++){
                for(let q = 0; q < ext.length; q++)
        console.log(pronoun[i] + adj[j] + noun[k] +ext[q])
    }
}
}
}

combArrays()