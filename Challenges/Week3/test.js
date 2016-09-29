//$(document).ready( *** Coach them on not needing this if they use non-render-blocking JS (script tag at bottom of DOM, before closing body tag)
    var sum = 0;
    var array = [1, 2, 3, 4, 5];
    for (var i = 0; i <= array.length; i++){
        sum += array[i];
        //console.log(sum);
        if (i == array.length - 1){
            console.log(sum);
        }
    }
array.splice(2,0,6);
console.log(array);

    $("h2 span").text('$6,500');

//);
