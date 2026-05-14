function szamol(){
    let szeles = document.getElementById("szeles").value;
    let magas = document.getElementById("magas").value;
    let ar = document.getElementById("ar").value;

    let dm2 = szeles * magas / 10000;

    document.getElementById("terulet").innerHTML = 
        dm2;
}