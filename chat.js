(function () {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('user-input');
  const messages = document.getElementById('messages');

  function appendMessage(author, text) {
    const msg = document.createElement('div');
    msg.className = author;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const userText = input.value;
    if (!userText.trim()) return;

    appendMessage('user', 'あなた：' + userText);
    input.value = '';

    setTimeout(() => {
      appendMessage('bot', '陽菜：はい、' + userText + ' ですね♡');
    }, 500);
  });
})();
