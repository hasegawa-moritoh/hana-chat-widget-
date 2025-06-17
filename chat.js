<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>陽菜チャット</title>
  <link rel="stylesheet" href="styles.css">
  <script src="chat.js" defer></script> <!-- ここを移動＋defer追加 -->
</head>
<body>
  <h1>陽菜に話しかけてね♡</h1>
  <form id="chat-form">
    <input type="text" id="user-input" placeholder="メッセージを入力">
    <button type="submit">送信</button>
  </form>
  <div id="messages"></div>
</body>
</html>
