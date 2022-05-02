let resultbtn1 = document.getElementById("result-btn1")
let resultbtn2 = document.getElementById("result-btn2")
let resultbtn3 = document.getElementById("result-btn3")
let resultbtn4 = document.getElementById("result-btn4")



function getPassword() {
    let chars = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_abcdefghijklmnopqrstuvwxyz{|}~`;
    let passwordLength = 10;
    let password1 = ""
    let password2 = ""
    let password3 = ""
    let password4 = ""

    for (let i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        password1 += chars.substring(randomNumber, randomNumber + 1);
    }
    for (let i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        password2 += chars.substring(randomNumber, randomNumber + 1);
    }
    for (let i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        password3 += chars.substring(randomNumber, randomNumber + 1);
    }
    for (let i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        password4 += chars.substring(randomNumber, randomNumber + 1);
    }

    
    resultbtn1.textContent = password1
    resultbtn2.textContent = password2;
    resultbtn3.textContent = password3;
    resultbtn4.textContent = password4;

    resultbtn1.style.cssText += "color:#e7b250;font-size:16px; font-family: Inter, sans serif; font-weight: bold "
    resultbtn2.style.cssText += "color:#e7b250;font-size:16px; font-family: Inter, sans serif; font-weight: bold "
    resultbtn3.style.cssText += "color:#e7b250;font-size:16px; font-family: Inter, sans serif; font-weight: bold "
    resultbtn4.style.cssText += "color:#e7b250;font-size:16px; font-family: Inter, sans serif; font-weight: bold "

}

resultbtn1.addEventListener("click", (e) =>{
    const content = document.getElementById("result-btn1").textContent;
    navigator.clipboard.writeText(content);
    resultbtn1.textContent = "Coppied";
    
})

resultbtn2.addEventListener("click", (e) =>{
    const content = document.getElementById("result-btn2").textContent;
    navigator.clipboard.writeText(content);   
    resultbtn2.textContent = "Coppied";
})

resultbtn3.addEventListener("click", (e) =>{
    const content = document.getElementById("result-btn3").textContent;
    navigator.clipboard.writeText(content);   
    resultbtn3.textContent = "Coppied";
})

resultbtn4.addEventListener("click", (e) =>{
    const content = document.getElementById("result-btn4").textContent;
    navigator.clipboard.writeText(content);   
    resultbtn4.textContent = "Coppied";
})

