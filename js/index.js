const genPass = document.getElementById("userInput");
const showPass = document.getElementById("showPassword");
const saveButton = document.getElementById("saveButton");
const labelName = document.getElementById("labelName").innerHTML = "Insert length of password"
const getPass = document.getElementById("getPassword").innerHTML = "Generate";



const generatePassword = (len) => {
    const char = "abcdefghijklmnopqrstuvwxyz";
    const upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const sym = "~!@#$%^&*()_+=-{}[]';?></.,|:";
    const total = char + upChar + num + sym;
    let generator = "";

        for(let i = 0; i < genPass.value; i++) {
            generator += total[~~(Math.random() * total.length)];
        }

    return generator
}

const showPassword = () => {
    const newPassword = generatePassword(genPass.length);
    showPass.value = newPassword;
}

const savePassword = () => {
    document.title = showPass.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
    encodeURIComponent(`Password: ${document.title}   

WARNING: Save this file if you use this password because 
you cannot retrieve it back after being deleted....
`))
    saveButton.setAttribute('download', 'MyPassGeneratorLog.txt');
}



