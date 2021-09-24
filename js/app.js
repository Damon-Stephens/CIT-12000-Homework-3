var response=document.body.querySelector(".looper");

var condition=true
var human_damage=0;
var dragon_damage=0;

//never use while loops again if you can help it//
 while (condition){
    if (human_damage<10){
        var question=prompt("How many times will you attempt to hit the dragon (between 1 & 5):")
        if (question==="1"||question==="2"||question==="3"||question==="4"||question==="5"){
            if(question==="1"){
                human_damage=(human_damage + 1)
            }else if(question==="2") {
                var random_damage = (Math.floor(Math.random() * 2) + 1);
                human_damage=(human_damage+random_damage)
            }else if(question==="3") {
                var random_damage = (Math.floor(Math.random() * 3) + 1);
                human_damage=(human_damage+random_damage)
            }else if(question==="4") {
                var random_damage = (Math.floor(Math.random() * 4) + 1);
                human_damage=(human_damage+random_damage)
            }else if(question==="5") {
                var random_damage = (Math.floor(Math.random() * 5) + 1);
                human_damage=(human_damage+random_damage)
            }
        }
        if(dragon_damage<5) {
            var random_dragon_damage = (Math.floor(Math.random() * 2) + 1)
            dragon_damage = (dragon_damage + random_dragon_damage)
        }
    }
    if(human_damage===10||human_damage>10) {
        condition = false
    }else
        if(dragon_damage===5||dragon_damage>5){
        condition=false
    }


}



if (human_damage===10||human_damage>10){
    response.innerHTML=`User Damage: ${human_damage} <br>Dragon Damage: ${dragon_damage} <br>Thou hath killed the wicked dragon. <br>You shall be rewarded handsomely for the head of this beast. <br>User wins!`
}else if(dragon_damage===5||dragon_damage>5) {
    response.innerHTML = `User Damage: ${human_damage} <br>Dragon Damage: ${dragon_damage} <br>Thou hath been slain in honorable battle. <br>Now go feast and drink with thine ancestors in the gilded halls of Valhalla! <br>Dragon wins!`
}


// for(var i=0; i<add_up; i++){}