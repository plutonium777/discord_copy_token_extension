chrome.action.onClicked.addListener(function (tab) {
    let tabId = tab.id
    chrome.scripting.executeScript(
        {
            target: {
                tabId // the tab you want to inject into
            },
            world: "MAIN", // MAIN to access the window object
            func: getToken // function to inject
        },
        () => {
            console.log("Background script got callback after injection")
        }
    )
});
function getToken () {
    token = (
        (
            webpackChunkdiscord_app.push(
                [
                    [''],
                    {},
                    e => {
                        m=[];
                        for(let c in e.c)
                            m.push(e.c[c])
                    }
                ]
            ),
                m
        ).find(
            m => m?.exports?.default?.getToken !== void 0
        ).exports.default.getToken())
    // alert(token)
    navigator.clipboard.writeText(token)
}
