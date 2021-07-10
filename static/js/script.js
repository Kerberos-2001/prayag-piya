function editDOM(){
    var ele = document.getElementById('hide');
    ele.parentNode.removeChild(ele);
    document.body.style.backgroundColor = "#111";
    var landing = document.getElementById('landing');
    $("#landing").removeAttr('style');
}

setTimeout(editDOM, 3000);

const d = new Date();
document.getElementById('date').innerHTML = d.toDateString() + '<br> (ready to work)';