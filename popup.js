document.addEventListener('DOMContentLoaded', function() {
  var extendDiff = document.getElementById('ExtendDiff');
  extendDiff.addEventListener('click', function() {

   function modifyDOM() {
    }

    // We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        // Here we have just the innerHTML and not DOM structure
        // console.log('Success!')
    });
  }, false);
}, false);