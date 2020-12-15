function changeFormAction(value)
{
    console.log(value);
    document.getElementById("form_RequestWithToken").action = "/" + value;
}