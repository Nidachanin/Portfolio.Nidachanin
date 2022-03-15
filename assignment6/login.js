window.onload = loginLoad;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const usernameFn = urlParams.get('username')
    const passwordFn = urlParams.get('password')

function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = CheckLogin;
}

//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
function CheckLogin(){
    var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];

	if(username.value != usernameFn || password.value != passwordFn){
        alert("password inncorrect please try again.");
        return false;
    }
    else
    {
        alert("Successfully");
    }

}
  
