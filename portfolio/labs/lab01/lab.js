/*

*/


function start(e) {
    var name = [
        {
            char: '魏',
            big5: 'C351',
            cns: '1-777B',
            unicode: '9B4F'
        },
        {   char: '敏',
            big5: 'B1D3',
            cns: '1-5A77',
            unicode: '654F'
        },
        {   char: '安',
            big5: 'A677',
            cns: '1-477B',
            unicode: '5B89'
        },
    ];
    var ele = document.getElementById('div1');

    for (var i = 0; i < 3; i++){
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
