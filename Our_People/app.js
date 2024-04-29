
const personList = [
    {
        name: "Taha", 
        age: 25,
         eyeColor: "brown", 
         hobby: "Photography", 
         img:"/Our_People/images/Taha.jpg",
         
        },
    {
        name: "Maksim",
        age:19,
        eyeColor:"Green",
        hobby:"Cooking",
        img:"/Our_People/images/Maksym.jpg",
    },
    {
        name:"Katherina",
        age:20,
        eyeColor:"Blue",
        hobby:"Hiking",
        img:"/Our_People/images/Kateryna.jpg",
        
    },
    {
        name:"Khalid",
        age:25,
        eyeColor:"Blue",
        hobby:"Language",
        img:"/Our_People/images/Khalid.jpg",  
    },
    {
        name:"Libuv",
        age:22,
        eyeColor:"Black",
        hobby:"Cooking",
        img:"/Our_People/images/Lu.jpg",
        
    },
    {
        name:"Mariaa",
        age:20,
        eyeColor:"Brown",
        hobby:"Walking",
        img:"/Our_People/images/Mariia.jpg",
        
    },
];

function info_personel(person_list){
for (let i = 0; i < personList.length; i++){

    const element = personList[i];

    let parentElement = document.createElement("div");
    let name = document.createElement("h2");

    name.classList.add("names");

    let img = document.createElement("img");

    img.src = element.img;
    name.innerHTML = element.name
    /** instead of innerHTML, use to innerText */

    parentElement.appendChild(name);
    parentElement.appendChild(img);
   
    let htmlList = document.getElementById("profilContainer");  
        
    htmlList.appendChild(parentElement);
   

    img.addEventListener('click', function() {
       alert(`Hobby: ${element.hobby}`);
    });

}

}
info_personel()




















/**
 function showInfo (){
    for (let i = 0; i person_list.length; i++) {
        const element = person_list[i];

        let parentElement = document.createElement("div");

        let name = document.createElement("h2");
        name.classList.add("names")
        let img = document.createElement("img");
        img.src = element.img;
        name.innerHTML = element.name;
        
        parentElement.appendChild(name);
        parentElement.appendChild(img);
        
        
        htmlList.appendChild(parentElement);
        
    }
}
showInfo();
 */
