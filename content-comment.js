/*
 * This file will be injected into the Medium article we are viewing.
 * It will identify the sections of the article that need to be highlighted
 */

// IIFE format, prevent any variables from being accessed
// by the global scope
(function() {
    const serverResponse = {{"success": true,    
                             "data": [
                                        {
                                            "_id": "5eb6fc83cc14aea5b6ad6cb3",
                                            "timestamp": "2020-05-09T18:54:59.741Z",
                                            "username": "sean",
                                            "url": "https://medium.com/@gilfink/building-a-chrome-extension-using-react-c5bfe45aaf36",
                                            "highlighted_text": "The first thing you will want to do is to create the extension project",
                                            "comment": "some comment",
                                            "selector": "#6c33",
                                            "replies": []         
                                        }     
                                     ] 
                              };
    const comment = document.querySelector(serverResponse.data[0].selector);
    var selectedText = document.querySelector(serverResponse.data[0].highlighted_text);
    newSelectedText = <span class = "highlight"> selectedText </span>;
    var res = str.replace(selectedText,newSelectedText);
    console.log("Content script running...");
}})();
