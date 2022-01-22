const setOfWord=[
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ","It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
]

const msg= document.getElementById('testcontent');
const typeWords= document.getElementById('testData');
const btn= document.getElementById('btn');

let startTime, endTime;
const playGame = ()=>{
    let randomNumber=Math.floor(Math.random() * setOfWord.length);
    msg.innerHTML=setOfWord[randomNumber];
    let date= new Date();
    startTime=date.getTime();
    //console.log(startTime);
    btn.innerHTML='Done';

}

const endPlay = ()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime= ((endTime - startTime)/1000);
    console.log("Total Time Took - "+ totalTime);
    
    let totalstr = typeWords.value;
    let wordCount= wordCounter(totalstr);
    let speed= Math.round((wordCount/totalTime) * 60);
    console.log("Total Speed - "+ speed);
    
    let finalMsg="You typed total at " + speed+ " words per minuntes "

    finalMsg  += compareWord(msg.innerText, totalstr)

    msg.innerText=finalMsg;
}

const compareWord =(str1, str2)=>{
    let word1= str1.split(" ");
    let word2= str2.split(" ");
    let count=0;
    word1.forEach(function (item, ind){
        if(item ==word2[index]){
            count++;
        }
    })

    let errorWord = (word1.length - count);
    return (count + " correct out of " + word1.length + " word and the total number of error are " + errorWord )
}

const wordCounter = (str)=>{
    let response= str.split(" ").length;
    console.log("Total Word Count - "+ response);
    return response;
}
btn.addEventListener('click', function(){
    //alert("Hello");
    if(this.innerHTML == 'Start'){
        typeWords.disabled=false;
        playGame();
    }else if (this.innerHTML == 'Done')
    {
        typeWords.disabled=true;
        endPlay();
    }
})




