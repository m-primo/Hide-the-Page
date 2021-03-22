console.log('cscript3: loaded');

var custom_code;
chrome.storage.sync.get(['theCustomCode'],function(result){
    custom_code = result.theCustomCode;
    document.getElementsByTagName('body')[0].innerHTML = '<div id="cScript3_theCustom--check" style="display:block;">'+custom_code+'</div><div id="cScript3_hideCustom--check" style="display:none;">'+document.getElementsByTagName('body')[0].innerHTML+'</div>';
});

if(!document.body.contains(document.getElementById('cScript_preventer--check'))) {
    const body = document.getElementsByTagName('body')[0];
    const element = document.createElement('div');
    element.setAttribute('style', 'display:none;');
    element.setAttribute('id', 'cScript_preventer--check');
    body.appendChild(element);
}