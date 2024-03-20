burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('hnav-resp');


})

function sentToWhatsapp(){
    let number="+918957118936";

    let name=document.getElementById('name2').value;
    let email=document.getElementById('email2').value;
    let filep=document.getElementById('file2').value;
    let meesage=document.getElementById('textarea2').value;
    

    var url="https://wa.me/" + number + "?text="
    +"Name : " +name+ "%0a"
    +"Email : " +email+ "%0a"
    +"Plan : " +filep+ "%0a"
    +"Message : " +meesage+ "%0a%0a";
    

    window.open(url, '_blank').focus();

}
