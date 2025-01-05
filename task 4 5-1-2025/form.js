


document.getElementById('f1').addEventListener('submit',handleSubmit)

function handleSubmit(event){
    event.preventDefault()

    
    let name = document.getElementById('Name').value
    let age = document.getElementById('Age').value
    let gender = document.getElementById('grnder').value
    let DOB = document.getElementById('BD').value
    let image = document.getElementById('img').files[0]
    let Description = document.getElementById('Des').value
    let major = document.getElementById('major').value
    let html = document.getElementById('html')
    let css = document.getElementById('css')
    let js = document.getElementById('js')
    let Sibllingnum = document.getElementById("sibnum").value
    let Sibllingdes = document.getElementById("sibdes").value

    document.getElementById("output").className="cards"
    document.getElementById("output").innerHTML=""
    if (image) {
        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(image); // Create a URL for the uploaded file
        imgElement.alt = "Uploaded Image";
        imgElement.style.maxWidth = "200px"; // Adjust as needed
        imgElement.style.display = "block";
        document.getElementById("output").appendChild(imgElement); // Append the image after the text
    } 

    
    let outputHTML = "Name: " + name + 
    "<br>Age: " + age + 
    "<br>Gender: " + gender + 
    "<br>Date of Birth: " + DOB + 
    "<br>Description: " + Description + 
    "<br>Major & University: " + major + checklang() + 
    "<br>Sibling Number: " + Sibllingnum + 
    "<br>Sibling Description: " + Sibllingdes;

    document.getElementById("output").innerHTML += outputHTML;

    addToLocal(name, age, gender, DOB, Description, image, major, Sibllingnum, Sibllingdes);

   
}




function addToLocal(name, age, gender, DOB, Description, image, major, Sibllingnum, Sibllingdes) {
    localStorage.setItem('name',name)
    localStorage.setItem('age',age)
    localStorage.setItem('gender',gender)
    localStorage.setItem('Date of birth',DOB)
    localStorage.setItem('Description',Description)
    if (image) {
        const reader = new FileReader();
        reader.onload = function () {
            localStorage.setItem('image', reader.result);
        };
        reader.readAsDataURL(image); // This reads the file and triggers onload when finished
    }
    localStorage.setItem('major and university',major)
    localStorage.setItem('sibling number',Sibllingnum)
    localStorage.setItem('siblling description',Sibllingdes)
}



function checklang() {
    if (html.checked && css.checked && js.checked){
        return "Programmin langugaes :" +html.value +", " + css.value +" "+js.value
    }
    else if (css.checked && js.checked ){
        return "Programmin langugaes :" +css.value +", " + js.value
    }
    else if (html.checked && js.checked ){
        return "Programmin langugaes :" +html.value +", " + js.value
    }
    if (html.checked && css.checked ){
        return "Programmin langugaes :" +html.value +", " + css.value
    }
    else if (html.checked){
        return "Programmin langugaes :" +html.value
    }

    else if (css.checked ){
        return "Programmin langugaes :" +css.value
    }
    else if (js.checked ){
        return "Programmin langugaes :" +js.value
    }

    

    

    
}