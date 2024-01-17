function validate()
{
        var txtName = document.getElementById("txtName");
        if(txtName.value=='')
        {
            var p = document.getElementById("message");
            p.innerText = "Name cannot be blank ";
            return false;
        }
        else
        {
            return true;
        }
}