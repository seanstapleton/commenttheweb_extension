/*
 * This file will be injected into the Medium article we are viewing.
 * It will identify the sections of the article that need to be highlighted
 */

// IIFE format, prevent any variables from being accessed
// by the global scope
(async function() {
    const currentUrl = location.href;
    const r = await fetch(`https://commenttheweb-server.herokuapp.com/comments?url=${currentUrl}`);
    const commentData = await r.json();
    console.log(commentData);
    
    const comment = document.querySelector(commentData.data[0].selector);
    var selectedText = document.querySelector(commentData.data[0].highlighted_text);
    newSelectedText = <span class = "highlight"> selectedText </span>;
    var res = str.replace(selectedText,newSelectedText);
    console.log("Content script running...");
})();
