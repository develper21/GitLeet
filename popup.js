/* global oAuth2 */
/* eslint no-undef: "error" */

let action = false;

document
  .getElementById('authenticate')
  .addEventListener('click', () => {
    if (action) {
      oAuth2.begin();
    }
  });

/* Get URL for welcome page */
document
  .getElementById('welcome_URL')
  .setAttribute('href', chrome.runtime.getURL('welcome.html'));
document
  .getElementById('hook_URL')
  .setAttribute('href', chrome.runtime.getURL('welcome.html'));

<<<<<<< HEAD
chrome.storage.local.get('lGitLeet_token', (data) => {
  const token = data.lGitLeet_token;
=======
chrome.storage.local.get('leethub_token', (data) => {
  const token = data.leethub_token;
>>>>>>> be465d8bc560770f834f0f8abe6c3a2f7a59e3fc
  if (token === null || token === undefined) {
    action = true;
    document.getElementById('auth_mode').style.display = 'block';
  } else {
    // To validate user, load user object from GitHub.
    const AUTHENTICATION_URL = 'https://api.github.com/user';

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          /* Show MAIN FEATURES */
          chrome.storage.local.get('mode_type', (data2) => {
            if (data2 && data2.mode_type === 'commit') {
              document.getElementById('commit_mode').style.display =
                'block';
              /* Get problem stats and repo link */
              chrome.storage.local.get(
<<<<<<< HEAD
                ['stats', 'lGitLeet_hook'],
=======
                ['stats', 'leethub_hook'],
>>>>>>> be465d8bc560770f834f0f8abe6c3a2f7a59e3fc
                (data3) => {
                  const { stats } = data3;
                  if (stats && stats.solved) {
                    document.getElementById('p_solved').textContent =
                      stats.solved;
                    document.getElementById(
                      'p_solved_easy',
                    ).textContent = stats.easy;
                    document.getElementById(
                      'p_solved_medium',
                    ).textContent = stats.medium;
                    document.getElementById(
                      'p_solved_hard',
                    ).textContent = stats.hard;
                  }
<<<<<<< HEAD
                  const lGitLeetHook = data3.lGitLeet_hook;
                  if (lGitLeetHook) {
                    document.getElementById('repo_url').innerHTML =
                      `<a target="blank" style="color: cadetblue !important; font-size:0.8em;" href="https://github.com/${lGitLeetHook}">${lGitLeetHook}</a>`;
=======
                  const leethubHook = data3.leethub_hook;
                  if (leethubHook) {
                    document.getElementById('repo_url').innerHTML =
                      `<a target="blank" style="color: cadetblue !important; font-size:0.8em;" href="https://github.com/${leethubHook}">${leethubHook}</a>`;
>>>>>>> be465d8bc560770f834f0f8abe6c3a2f7a59e3fc
                  }
                },
              );
            } else {
              document.getElementById('hook_mode').style.display =
                'block';
            }
          });
        } else if (xhr.status === 401) {
          // bad oAuth
          // reset token and redirect to authorization process again!
<<<<<<< HEAD
          chrome.storage.local.set({ lGitLeet_token: null }, () => {
=======
          chrome.storage.local.set({ leethub_token: null }, () => {
>>>>>>> be465d8bc560770f834f0f8abe6c3a2f7a59e3fc
            console.log(
              'BAD oAuth!!! Redirecting back to oAuth process',
            );
            action = true;
            document.getElementById('auth_mode').style.display =
              'block';
          });
        }
      }
    });
    xhr.open('GET', AUTHENTICATION_URL, true);
    xhr.setRequestHeader('Authorization', `token ${token}`);
    xhr.send();
  }
});
