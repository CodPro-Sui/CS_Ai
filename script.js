let userQuery = document.getElementById("userQuery");
let ask = document.getElementById("ask");
const message = document.getElementById("msg");


userQuery.addEventListener("input", () => {
  userQuery.value = userQuery.value.replace(/[a-zA-Z]+/g, "");
})
ask.addEventListener("click", () => {
  
  if (userQuery.value !== "") {
    let allValue = userQuery.value;
    allValue = allValue.replace(/\^/g, "**");
    allValue = allValue.replace(/[×]/g, "*");
    allValue = allValue.replaceAll("π", Math.PI);
    allValue = allValue.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");
    let userBox = document.createElement("div");
    userBox.classList.add("userBox");
    let userTxt = document.createElement("div");
    userTxt.innerText = userQuery.value.trim();
    userTxt.classList.add("userTxt");
    userBox.appendChild(userTxt);
    message.appendChild(userBox);
    
    let time = Math.random() * 1000;
    ask.disabled = true;
    setTimeout(() => {
      ask.disabled = false;
    }, time)
    let switchStore = userQuery.value;
    setTimeout(() => {
      let aiBox = document.createElement("div");
      aiBox.classList.add("aiBox");
      let aiTxt = document.createElement("div");
      let calculatedValue = eval(allValue);
      try {
        aiTxt.innerHTML = `${switchStore} = <b>${eval(allValue)}</b>`;
      } catch (e) {
        aiTxt.innerHTML = `I'm sorry, unabale to understand your equation please resend me.`
      }
      aiTxt.classList.add("aiTxt");
      aiBox.appendChild(aiTxt);
      message.appendChild(aiBox);
    }, time)
    userQuery.value = "";
  }
});


let storedUserName = localStorage.getItem("userName");

if (!storedUserName) {
  storedUserName = prompt("Enter your username:").trim().toUpperCase();
  if (storedUserName) {
    localStorage.setItem("userName", storedUserName);
  }
}

let userName = storedUserName ? storedUserName.slice(0, 2) : "GU";

let logo = document.querySelector(".logo");
if (logo) {
  logo.innerHTML = userName;
}

let aboutMe = document.getElementById("userHistory");
aboutMe.addEventListener("click", () => {
  let myPage = document.createElement("div");
  myPage.classList.add("myPage");
  
  let close = document.createElement("div");
  close.classList.add("close");
  close.innerHTML = `<span class="material-symbols-outlined">close</span>`;
  close.addEventListener("click",() =>{
    myPage.remove();
  })
  
  let profile = document.createElement("div");
  profile.classList.add("profile");
  
  let image = document.createElement("div");
  image.classList.add("image");
  image.innerHTML = `<img src="my.jpg">`;
  let name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = `CodPro Sui`;
  
  profile.appendChild(image);
  profile.appendChild(name);
  
  myPage.appendChild(close);
  myPage.appendChild(profile);
  
  
  document.body.appendChild(myPage);
})