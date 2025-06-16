(function() {
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

  function botReply(userText) {
    const replies = [
      'こんにちは！どんなご用件でしょうか？',
      'メッセージありがとうございます。',
      `"${userText}" について調べてみますね。`
    ];
    const index = Math.floor(Math.random() * replies.length);
    return replies[index];
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMessage('user', text);
    input.value = '';
    setTimeout(() => {
      const reply = botReply(text);
      appendMessage('bot', reply);
    }, 500);
  });
})();
