function editDOM(){
    var ele = document.getElementById('hide');
    ele.parentNode.removeChild(ele);
    document.body.style.backgroundColor = "#111";
    var landing = document.getElementById('landing');
    $("#landing").removeAttr('style');
}

setTimeout(editDOM, 3000);

// var layers = document.getElementsByClassName('layer')
// var numLayer = layers.length
// var count  = [0, 10]
// animationClass = ['one', 'two', 'four', 'five']

// for(var i =0; i <= numLayer-1; i++)
// {
//     layers[i].classList.add(animationClass[i])
//     if (i == 2 && numLayer == 2)
//     {
//         break
//     }
//     else{
//         powerValue = Math.pow(i+count[i], 2) 
//         console.log(powerValue+'px')
//         layers[i].style.marginLeft = powerValue+'px'
//         layers[numLayer-1].style.marginLeft = powerValue+'px'
//         numLayer -= 1;
//     }
// }