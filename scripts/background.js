function handleMessage(request) {
  if (
    request &&
    request.closeWebPage === true &&
    request.isSuccess === true
  ) {
    /* Set username */
    chrome.storage.local.set(
<<<<<<< HEAD
      { lGitLeet_username: request.username },
=======
      { leethub_username: request.username },
>>>>>>> be465d8bc560770f834f0f8abe6c3a2f7a59e3fc
      () => {
        // Service worker doesn't have window.localStorage
        // Storage is handled by chrome.storage.local
      },
    );

    /* Set token */
<<<<<<< HEAD
    chrome.storage.local.set(
      { lGitLeet_token: request.token },
      () => {
        // Service worker doesn't have window.localStorage
        // Storage is handled by chrome.storage.local
      },
    );

    /* Close pipe */
    chrome.storage.local.set({ pipe_lGitLeet: false }, () => {
      // Pipe closed successfully
=======
    chrome.storage.local.set({ leethub_token: request.token }, () => {
      // Service worker doesn't have window.localStorage
      // Storage is handled by chrome.storage.local
    });

    /* Close pipe */
    chrome.storage.local.set({ pipe_leethub: false }, () => {
      console.log('Closed pipe.');
>>>>>>> be465d8bc560770f834f0f8abe6c3a2f7a59e3fc
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
<<<<<<< HEAD
    request.isSuccess === false
  ) {
    // Authentication failed
=======
    request.isSuccess === true
  ) {
    alert(
      'Something went wrong while trying to authenticate your profile!',
    );
>>>>>>> be465d8bc560770f834f0f8abe6c3a2f7a59e3fc
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
