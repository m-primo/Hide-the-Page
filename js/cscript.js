console.log('cscript: loaded');

document.getElementsByTagName('body')[0].style.display = 'none';

if(!document.body.contains(document.getElementById('cScript_preventer--check'))) {
    const body = document.getElementsByTagName('body')[0];
    const element = document.createElement('div');
    element.setAttribute('style', 'display:none;');
    element.setAttribute('id', 'cScript_preventer--check');
    body.appendChild(element);
}