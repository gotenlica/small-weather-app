

    let hour = document.querySelector(".hours");
    let minute = document.querySelector(".minutes");
    let secund = document.querySelector(".secunds");
    let day = document.querySelector(".day");
    let month = document.querySelector(".month");
    let year = document.querySelector(".year");



    function diplayDate(){
        document.querySelector(".event").innerHTML = Date()
    }

    
// current date 

let myDate = new Date()

day.innerHTML = myDate.getDate();
month.innerHTML = myDate.getMonth() + 1;
year.innerHTML= myDate.getFullYear();

//console.log(myDate);


//funtion for the real time in the app

    setInterval(()=>{

         let currentTime = new Date()



//thia is the way how to app the secund digit to my clock( currentTime.getHours() < 10 ?"0":"") + currentTime.getHours();

    hour.innerHTML =( currentTime.getHours() < 10 ?"0":"") + currentTime.getHours();
    minute.innerHTML = (currentTime.getMinutes() < 10 ?"0":"") + currentTime.getMinutes();
    secund.innerHTML = (currentTime.getSeconds() < 10 ?"0":"") + currentTime.getSeconds();
    



    },1000)

