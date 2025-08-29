document.addEventListener('DOMContentLoaded', async () => {
    const toggle = document.getElementById('videos-switch');
    
    const result = chrome.storage.sync.get(['videosEnabled']);
    toggle.checked = result.videosEnabled || false;


    toggle.addEventListener('change', async (e) => {
        const isEnabled = e.target.checked;
        await chrome.storage.sync.set({ videosEnabled: isEnabled });

        
    });
});