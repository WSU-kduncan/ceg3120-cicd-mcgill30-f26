// let user_input = prompt("Enter a number: ");
// console.log(typeof user_input);

// if (user_input===20){
//     console.log("number matched")
// }

function inClassFunctin() 
{
    let targetHtml = document.getElementById("changeMe");
    let targetButton = document.getElementById("myBtn");

  if (targetHtml && targetButton)
    {
        if (originalState === null)
        {
            // First click: save the originals, then apply the changes
            originalState = {
                color: targetHtml.style.color,
                html: targetHtml.innerHTML,
                fontStyle: targetHtml.style.fontStyle,
                fontFamily: targetHtml.style.fontFamily,
                display: targetHtml.style.display
            };
 
            targetHtml.style.color = "red";
            targetHtml.innerHTML = "Test Complete";
            targetHtml.style.fontStyle = "italic";
            targetHtml.style.fontFamily = "Georgia, serif";
            targetHtml.style.display = "inline-block";
        }
        else
        {
            // Second click: put everything back
            targetHtml.style.color = originalState.color;
            targetHtml.innerHTML = originalState.html;
            targetHtml.style.fontStyle = originalState.fontStyle;
            targetHtml.style.fontFamily = originalState.fontFamily;
            targetHtml.style.display = originalState.display;
 
            originalState = null;
        }
    }
}

function getFormData()
{
    // let firstName = document.getElementById("firstName").value;
    // let lastName = document.getElementById("lastName").value;
    // let email = document.getElementById("email").value;
    // let salary = document.getElementById("salary");

    let firstName = document.forms['survey']['first_name'].value; 
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let salary = document.getElementById("salary").value;
    let language = document.forms['survey']['language'].value;
    let experience = document.getElementById("experience").value;
    let userParagraph = document.getElementById("userParagraph");

    


    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(salary);
    console.log(language);
    console.log(experience);
    console.log(userParagraph);




}