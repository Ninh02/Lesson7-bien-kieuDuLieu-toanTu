function tinhtong(){
    let a=+document.getElementById("a").value;
    let b=+document.getElementById("b").value;
    let c=a+b;
    document.getElementById("resurt").innerText="tong ="+c;
}function  tinhhieu(){
    let a=+document.getElementById("a").value;
    let b=+document.getElementById("b").value;
    let c=a-b;
    document.getElementById("resurt").innerText= "hieu ="+ c;
}function tinhtich(){
    let a=+document.getElementById("a").value;
    let b=+document.getElementById("b").value;
    let c=a*b;
    document.getElementById("resurt").innerText="tich="+c;
}function tinhthuong(){
    let a=+document.getElementById("a").value;
    let b=+document.getElementById("b").value;
    let c=a/b;
    document.getElementById("resurt").innerText="thuong="+c;
}