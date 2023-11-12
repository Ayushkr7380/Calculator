document.addEventListener("DOMContentLoaded",()=>{
    const display1 = document.getElementById("in1");
    const buttons1 = document.querySelectorAll('.buttons button');

    let takeData = '';

    function currentInput1(){
        display1.value = takeData;
    }

    buttons1.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            const data = btn.textContent;

            if(data == '='){
                try{
                    takeData = eval(takeData);
                }
                catch(error)
                {
                    takeData = 'Error';
                }
            }
            else if(data == 'C'){
                takeData = '';
            }
            else{
                takeData = takeData + data;
            }

            currentInput1();
        });
    });
});