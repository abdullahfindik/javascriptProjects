let fullName = prompt("Adınız Soyadınız : ")

let myName = document.querySelector("#myName")

myName.innerHTML= `${fullName}`

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

function clockFunction(){
    let dateTime= new Date();
    let date = dateTime.getDate()
    let mount = dateTime.getMonth()+1
    let year = dateTime.getFullYear()
    let day = days[dateTime.getDay()]
    let hrs = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    
    document.querySelector("#myClock").innerHTML = `${date}/${mount}/${year} ${day} tarihinde, saat ${hrs}:${min}:${sec} 'de  `
}
    
    setInterval(clockFunction, 1000)



