function handleMessage(request) {
  if (
    request &&
    request.closeWebPage === true &&
    request.isSuccess === true
  ) {
    /* Set username */
    chrome.storage.local.set(
      { leethub_username: request.username },
      () => {
        // Service worker doesn't have window.localStorage
        // Storage is handled by chrome.storage.local
      },
    );

    /* Set token */
    chrome.storage.local.set({ leethub_token: request.token }, () => {
      // Service worker doesn't have window.localStorage
      // Storage is handled by chrome.storage.local
    });

    /* Close pipe */
    chrome.storage.local.set({ pipe_leethub: false }, () => {
      console.log('Closed pipe.');
    });

    chrome.tabs.query(
      { active: true, currentWindow: true },
      (tabs) => {
        if (tabs[0]) {
          chrome.tabs.remove(tabs[0].id);
        }
      },
    );

    /* Go to onboarding for UX */
    const urlOnboarding = chrome.runtime.getURL('welcome.html');
    chrome.tabs.create({ url: urlOnboarding, active: true }); // creates new tab
  } else if (
    request &&
    request.closeWebPage === true &&
    request.isSuccess === true
  ) {
    alert(
      'Something went wrong while trying to authenticate your profile!',
    );
    chrome.tabs.query(
      { active: true, currentWindow: true },
      (tabs) => {
        if (tabs[0]) {
          chrome.tabs.remove(tabs[0].id);
        }
      },
    );
  }
}

chrome.runtime.onMessage.addListener(handleMessage);
