const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage('user', 'あなた：' + userText);
  input.value = '';

  appendMessage('bot', '陽菜：...考え中...');

  try {
    console.log("🌸 fetch開始");
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userText })
    });

    const data = await response.json();
    console.log("🌸 応答データ:", data);

    clearLastBotMessage();
    appendMessage('bot', '陽菜：' + data.reply.trim());
  } catch (err) {
    console.error("🌧️ fetch失敗:", err);
    clearLastBotMessage();
    appendMessage('bot', '陽菜：ごめんね、応答に失敗しちゃった…');
  }
});

function appendMessage(author, text) {
  const msg = document.createElement('div');
  msg.className = author;
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function clearLastBotMessage() {
  const botMessages = messages.querySelectorAll('.bot');
  if (botMessages.length > 0) {
    botMessages[botMessages.length - 1].remove();
  }
}
