const dogBtn =document.getElementById('dog_btn');
const catBtn =document.getElementById('cat_btn');
const resultsCat =document.getElementById('cat_result');
const resultsDog =document.getElementById('dog_result');


catBtn.addEventListener('click',getRandomCat)

function getRandomCat(){
   fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data =>{
        resultsCat.innerHTML=`<img src="${data.file}"/>`;
    })
}
dogBtn.addEventListener('click',getRandomdog)

function getRandomdog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
     resultsDog.innerHTML=  `<img src="${data.url}"/>`;
    })
}


