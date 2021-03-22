console.log('cscript2: loaded');

document.getElementsByTagName('body')[0].style.display = 'block';

if(document.body.contains(document.getElementById('cScript_preventer--check'))) {
    document.getElementById('cScript_preventer--check').remove();
}

if(document.body.contains(document.getElementById('cScript3_hideCustom--check'))) {
    document.getElementsByTagName('body')[0].innerHTML = document.getElementById('cScript3_hideCustom--check').innerHTML;
}