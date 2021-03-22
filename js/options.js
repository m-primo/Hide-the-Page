function getId(id) {
    return document.getElementById(id);
}
// =============================================================================
chrome.storage.sync.get(['theCustomCode'],function(result){
    getId('customCode').value = result.theCustomCode;
});

getId('saveButton').addEventListener('click',function(){
    console.log('saveButton: clicked');
    chrome.storage.sync.set({theCustomCode: getId('customCode').value},function(){
        alert('Saved');
    });
});