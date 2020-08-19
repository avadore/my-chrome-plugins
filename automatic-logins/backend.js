chrome.tabs.onActivated.addListener(
    tab=>{
            console.log(tab);
            chrome.tabs.get(tab.tabId,current_tab_info => console.log(current_tab_info.url));
            chrome.tabs.get(tab.tabId,current_tab_info => {
                 if (/^http:\/\/ideasmartwifihub\.4g/.test(current_tab_info.url)){
                              chrome.tabs.executeScript(null,{file:'./frontend.js'}, ()=>console.log("automatic login"));
                              console.log("i injected");
            
        }
            });         
          
        })

// chrome.tabs.executeScript(null,{file:'./frontend.js'}, ()=>console.log('I injected frontend.js'))