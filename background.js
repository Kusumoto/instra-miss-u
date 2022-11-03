chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        'id': 1001,
        'priority': 1,
        'action': {
            'type': 'block'
        },
        'condition': {
            'urlFilter': 'i.instagram.com/api/v1/stories/reel/seen',
            'resourceTypes': ['xmlhttprequest']
        }
    },{
        'id': 1002,
        'priority': 1,
        'action': {
            'type': 'block'
        },
        'condition': {
            'urlFilter': 'www.instagram.com/api/v1/stories/reel/seen',
            'resourceTypes': ['xmlhttprequest']
        }
    }],
    removeRuleIds: [1001, 1002]
})
