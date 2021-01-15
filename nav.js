//Siin menüüriba peanuppude osa
document.getElementById("sort").addEventListener("click", sortEvent);
document.getElementById("filter").addEventListener("click", filterEvent);
document.getElementById("navbtn").addEventListener("click", toggleSidebar);

function sortEvent(){
    document.getElementById("sort").className = "btn active";
    document.getElementById("filter").className = "btn";
    sorting.style.display = 'block';
    filtering.style.display = 'none';
}
function filterEvent(){
    document.getElementById("filter").className = "btn active";
    document.getElementById("sort").className = "btn";
    sorting.style.display = 'none';
    filtering.style.display = 'block';
}

function toggleSidebar() {
    if (document.getElementById("menu").style.width == "0%"){
        document.getElementById("menu").style.width = "20%";
        document.getElementById("navbtn").style.left = "21%";
    }else{
        document.getElementById("menu").style.width = "0%";
        document.getElementById("navbtn").style.left = "1%";
    }
}
