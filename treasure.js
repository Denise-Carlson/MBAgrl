const treasure = () =>{ var randomlocation = Math.floor(Math.random() * 9)
console.log(randomlocation)
    if(randomlocation === 0){
        document.getElementById("0").innerHTML = "🦇"
    }   
