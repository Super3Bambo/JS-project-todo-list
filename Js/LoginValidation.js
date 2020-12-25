function Reg(){
    if (!isNaN(document.getElementById("username").value)||(document.getElementById("username").value)=="")
        {
            alert("name must include only letters ");
            return false;
        }
        else
        {
        document.cookie= "name =" +document.getElementById("username").value ;
        document.cookie= "pass =" +document.getElementById("password").value ;
        location.replace("Begin.html");
        }      
        }