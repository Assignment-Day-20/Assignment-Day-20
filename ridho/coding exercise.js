let names= ["Alex", "Jacob", "Mark", "Max", "Hunter", "Lala"]


let info ={
    id:"HJKdsJbjbj124",
    status:"200",
    likes: names,
    createAt: "Monday 27 Sept 2021",
    liker: function(){
        if(info.likes.slice(0,2)){
            return `${info.likes[0]} and ${info.likes[1]} like this`
        }
        if(info.likes.slice(0,0)){
            return `no one like this`
        }
        if(info.likes.slice(2,5)){
            return `${info.likes[2]},${info.likes[3]} and ${info.likes[4]} like this`
        }
        if(info.likes.slice(0,1)){
            return `${info.likes[0]} like this`
        }
        if(info.likes.slice(0,4)){
            return `${info.likes[0]},${info.likes[1]} and 2 other like this`
        }
        
    }
}

console.log(info.liker(info.likes));

// git hub pass bangsatkau80