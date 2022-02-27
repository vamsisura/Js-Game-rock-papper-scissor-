let images=document.querySelectorAll('.image')

for(let x of images){
    x.addEventListener('click',function(){
        let player1=this.getAttribute('value')
        document.querySelector('#player1').innerHTML=player1
        this.style.transform='scale(1.1)'
        this.style.transition='1s'
        document.querySelector('#result').style.visibility='visible'

        computer()
        if(player1==player2){
            document.querySelector('#result').innerHTML = 'DRAW'
            document.querySelector('#result').style.background='yellowgreen'
        }
        else if(player1=='rock' && (player2=='lizard' || player2=='scissor')){
            document.querySelector('#result').innerHTML = 'YOU WON !!'
            document.querySelector('#result').style.background='green'
        }
        else if(player1=='paper' && (player2=='rock' || player2=='spock')){
            document.querySelector('#result').innerHTML = 'YOU WON !!'
            document.querySelector('#result').style.background='green'
        }
        else if(player1=='scissor' && (player2=='lizard' || player2=='paper')){
            document.querySelector('#result').innerHTML = 'YOU WON !!'
            document.querySelector('#result').style.background='green'
        }
        else if(player1=='lizard' && (player2=='spock' || player2=='paper')){
            document.querySelector('#result').innerHTML = 'YOU WON !!'
            document.querySelector('#result').style.background='green'
        }
        else if(player1=='spock' && (player2=='rock' || player2=='scissor')){
            document.querySelector('#result').innerHTML = 'YOU WON !!'
            document.querySelector('#result').style.background='green'
        }
        else{
            document.querySelector('#result').innerHTML = 'YOU LOSE !!'
            document.querySelector('#result').style.background='red'
        }
        document.querySelector('#cover').style.display='block'
        
    })
}


let arr=['rock','paper','scissor','lizard','spock'];
let random=Math.trunc(Math.random() *5) 
let secondplayer=document.querySelectorAll('.image1')
let player2=arr[random];
function computer(){
    document.querySelector('#player2').innerHTML=player2
    for(let y of secondplayer){
        if(arr[random] == y.getAttribute('value')){
            y.style.transform='scale(1.1)'
            y.style.transition='1s'

        }
    }
}

