let url = "https://catfact.ninja/fact";

let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

btn.addEventListener("click", getFact);


function getFact (){
  p.innerHTML = `<span>Fact:</span>Finding...`;
  h3.innerHTML = ``;
  fetch(url)
  .then((res)=>{
    if(res){
      console.log(res);
      res.json().then((data)=>{
        p.innerHTML =`<span>Fact : </span>${data.fact}`;
        h3.innerHTML = `Length : <b>${data.length}</b>`;
      });
    };   
  }).catch((err)=>{
    if(res){
      p.innerText = err;
    }   
  });
};