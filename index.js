const zodiac=document.getElementById("zodiac");

const body=document.body;
const changebackground = () =>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor="red"
            
            break;
        case "tarus":
            body.style.backgroundColor="#1F6341"
            
            break;
        case "gemini":
            body.style.backgroundColor="#A03D8F"
            
            break;
        case "cancer":
            body.style.backgroundColor="#31CDC0"
            
            break;
        case "leo":
            body.style.backgroundColor="#049C90"
            
            break;
        case "virgo":
            body.style.backgroundColor="#060EA0"
            
            break;
        case "scorpio":
            body.style.backgroundColor="#3280EA"
            
            break;
        case "saggitarius":
            body.style.backgroundColor="#DAE44A"
            
            break;
        case "aquarius":
            body.style.backgroundColor="#66E44A"
            
            break;
        case "capricon":
            body.style.backgroundColor="#16630A"
            
            break;
        case "pisces":
            body.style.backgroundColor="#DA7813"
            
            break;
    
        default:
            body.style.backgroundColor="white"
            break;
    }
};



