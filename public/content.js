let userName = '';

function injectScript(file, node) {
  var th = document.getElementsByTagName(node)[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  th.appendChild(s);
}

injectScript( chrome.runtime.getURL('modal.js'), 'body');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.type === 'user-is-logged-in') {
    userName = request.name
  }
});

const inactivityTime = () => {
  let time = 0;
  // DOM Events
  document.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onmousedown = resetTimer;
  document.ontouchstart = resetTimer;
  document.onclick = resetTimer;
  document.onkeydown = resetTimer;
  document.addEventListener('scroll', resetTimer, true);

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(() => {
      if (userName) {
        if (document.getElementsByTagName('pp-modal').length > 0) {
          document.getElementsByTagName('pp-modal')[0].remove();
        }
        document.body.innerHTML += `<pp-modal><p>Are you lost ${userName}?</p></pp-modal>`
      } 
    }, 5000)
  }
};

inactivityTime();
