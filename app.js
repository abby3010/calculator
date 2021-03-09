function f1(num) {
    document.f.t1.value = document.f.t1.value + num;
}

function equal() {
    document.f.t1.value = eval(document.f.t1.value);
}


function f2() {
    t1len = document.f.t1.value;
    document.f.t1.value = t1.substring(t1len, t1len - 1);
}