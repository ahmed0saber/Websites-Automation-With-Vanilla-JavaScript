function myFunction(){
    document.getElementById("myFrame").contentWindow.document.getElementsByTagName("input")[0].checked = true;

    document.getElementById("myFrame").contentWindow.document.getElementsByTagName("input")[2].value = "40005589";
    document.getElementById("myFrame").contentWindow.document.getElementsByTagName("input")[3].value = "001719";
}
function myFunction2(){
    console.log("clicked...");
    /*document.getElementById("myFrame").contentWindow.document.getElementsByTagName("input")[4].click();*/
}




/*
0
40005589
001719
*/
/*
0
0
0
0
*/