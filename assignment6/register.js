window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = ValidateForm;
}

//ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
function ValidateForm() {
    var password = document.forms["myForm"]["password"];
    var errormsg = document.getElementById("errormsg");
    var result = true;


    if(password[0].value != password[1].value){
        errormsg.innerText = "password inncorrect please try again.";
        result = false;
    }
    return result;
}










	
