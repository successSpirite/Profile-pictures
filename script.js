//const imgBox = document.querySelector(".imgBox");
const gridContent = document.querySelector(".grid");
const Wrapper = document.querySelector(".wrapper");
const navProfile = document.querySelector('.profile');
const page = document.getElementById("page");

document.getElementById("NavIcon").addEventListener("click", ()=>{
 const Bar = document.querySelector(".Bar");
 Bar.style.display =  Bar.style.display === "flex" ? "none": "flex";
 Bar.classList.add("show");
    

});

let count = 0;
let Savings = " ";
const Add = document.getElementById("addUp");
Add.addEventListener("click", ()=>{


const gridImg = document.createElement("div");
gridImg.setAttribute("class", "img1");

// onece gridImg is 5 then scroll added
count ++;
    if (count === 5) {
    
    gridContent.style.overflowY = "scroll";
    gridContent.style.overflowX = "hidden";
    gridContent.style.height = "400px";

    }



const divGridImg = document.createElement("div");
divGridImg.classList.add("image");
//divGridImg.setAttribute("class", "image");
const ImageBox = document.createElement("div");
ImageBox.classList.add("imgBox");
 
//input in image class
const Input = document.createElement("div");

Input.classList.add('input');

const inputSelf = document.createElement("input");
inputSelf.type = "text";
inputSelf.placeholder = "your name ";

// saving if input is not an empty string
inputSelf.addEventListener("input", (e)=>{
Savings = e.target.value;
   
if (Savings !== " ") {

    SaveButton.addEventListener("click", ()=>{
         inputSelf.style.display = "none";
         SaveButton.style.display = "none";
         Input.textContent = Savings;
         Input.classList.add("Indd");
    });

    
} else {
    
}
});






Input.appendChild(inputSelf);
const SaveButton = document.createElement("button");
SaveButton.textContent = "save";
Input.appendChild(SaveButton);
// saving if input is not an empty string 




//img in imgBox
const ImageBoxImg = document.createElement("img");
ImageBoxImg.classList.add("ProPic");
ImageBoxImg.src = `${"img/account_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"}`;

ImageBox.appendChild(ImageBoxImg);
divGridImg.appendChild(ImageBox);
gridImg.appendChild(divGridImg);
gridImg.appendChild(Input);


gridContent.appendChild(gridImg);
console.log(gridContent);
//clearingup
const clearUp = document.getElementById("clearUp")
.addEventListener("click", ()=>{
//    gridContent.innerHTML= " ";

    page.style.display = "flex";
      page.textContent = "You would have to refresh to clear off";

      setTimeout(() => {
    page.style.display = "none";
      }, 6000);
      //    gridContent.innerHTML = "";

});


    //Adding eventlisterner to the profile icons 

    ImageBoxImg.addEventListener("click", ()=>{
        const createdInput = document.createElement("input");
        createdInput.type = 'file';
        createdInput.accept = 'image/*';
        createdInput.click();

        createdInput.addEventListener('change', (e)=>{
            
            const file = e.target.files[0];
            ImageBoxImg.src = URL.createObjectURL(file);
          proNone();

        });

        

    });
    
});

    //  NaveIput profile
    const NaveInput = document.createElement("input");

        NaveInput.type = 'file';
        NaveInput.accept = 'image/*';

        const NavImg = document.createElement("img");
        NavImg.src = " ";
        

        navProfile.addEventListener("click", ()=>{
            
            NaveInput.click();
        });

        NaveInput.addEventListener("change", (e)=>{
            const TargetFile = e.target.files[0];
            
            
            NavImg.src = URL.createObjectURL(TargetFile);
            proNone();
             
        });
        navProfile.appendChild(NavImg);

       



        // working once updated 

function proNone() {
     page.style.display = "flex";
    page.textContent = "Profile updated";
    setTimeout(() => {
              page.style.display = "none";
                
            }, 6000);
    
}