// alert('start of main');


function onClickMeButtonClick()
{
    alert('"alert" Test');
    console.log('"console.log" test');
    console.error('"console.error" test');
    d3.json('./data.json').then(data => console.log(data));
}

function onMathButtonClick()
{
    let a = 10;
    let b = 32;
    let c = a + b;
    b = c += a;
    a = Math.pow(a, c);
    a = Math.log(a, b);
    c = a + b + c / 3;
    b = (a + b + c) / 3;
    console.log(a, b, c);
}