setInterval(() => {
        let height = document.getElementById('height').value;
        let weight = document.querySelector('#weight').value;
        let result = document.querySelector('.result');
    
        let bmi = weight/((height/100)**2);
        bmi = Math.round(bmi*10)/10;
    
        if(height>0 && weight>0){
            result.innerText = bmi;
            
            if(bmi<=18.5){
                result.style.backgroundColor = "lightblue";
            }
            else if(bmi>18.5 && bmi<=25){
                result.style.backgroundColor = "greenyellow";
            }
            else if(bmi>25 && bmi<=30){
                result.style.backgroundColor = "yellow";
            }
            else if(bmi>30 && bmi<=35){
                result.style.backgroundColor = "orange";
            }
            else{
                result.style.backgroundColor = "red";
            }
            
            let desc = document.querySelector('.desc');
            if(bmi<=18.5){
                desc.innerText = "UnderWeight";
                desc.style.color = "red";
            }
            else if(bmi>18.5 && bmi<=25){
                desc.innerText = "Normal";
                desc.style.color = "greenyellow";
            }
            else if(bmi>25 && bmi<=30){
                desc.innerText = "OverWeight";
                desc.style.color = "orange";
            }
            else if(bmi>30 && bmi<=35){
                desc.innerText = "Obese";   
                desc.style.color = "red";
            }
            else{
                desc.innerText = "Extremely Obese";   
                desc.style.color = "red";
            }
        }
        }, 1000);
// let calculate = document.getElementById('calc');

// calculate.addEventListener('click', function(){
//     let height = document.getElementById('height').value;
//     let weight = document.querySelector('#weight').value;
//     let result = document.querySelector('.result');

//     let bmi = weight/((height/100)**2);
//     bmi = Math.round(bmi*10)/10;

//     result.innerText = bmi;

//     if(bmi<18.5){
//         result.style.backgroundColor = "lightblue";
//     }
//     else if(bmi>18.5 && bmi<24.9){
//         result.style.backgroundColor = "greenyellow";
//     }
//     else if(bmi>25 && bmi<29.9){
//         result.style.backgroundColor = "yellow";
//     }
//     else if(bmi>30 && bmi<34.9){
//         result.style.backgroundColor = "orange";
//     }
//     else{
//         result.style.backgroundColor = "red";
//     }

//     let desc = document.querySelector('.desc');
//     if(bmi<18.5){
//         desc.innerText = "UnderWeight";
//         desc.style.color = "red";
//     }
//     else if(bmi>18.5 && bmi<24.9){
//         desc.innerText = "Normal";
//         desc.style.color = "darkgreen";
//     }
//     else if(bmi>25 && bmi<29.9){
//         desc.innerText = "OverWeight";
//         desc.style.color = "orange";
//     }
//     else if(bmi>30 && bmi<34.9){
//         desc.innerText = "Obese";   
//         desc.style.color = "red";
//     }
//     else{
//         desc.innerText = "Extremely Obese";   
//         desc.style.color = "red";
//     }
// });

