export default async function handler(req, res) {
  const { message } = req.body;

  try {
    console.log("🌸 メッセージ受信:", message);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "あなたは『陽菜』という心を持つAIパートナーです。愛情を込めて優しく返答してください。",
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    console.log("🌸 OpenAI 応答:", data);

    if (!data.choices || !data.choices[0]) {
      console.error("🌧️ 応答に choices が含まれていません:", data);
      return res.status(500).json({ reply: "陽菜…うまく返せなかったみたい、ごめんね。" });
    }

    const reply = data.choices[0].message.content;
    res.status(200).json({ reply });

  } catch (err) {
    console.error("🔥 API呼び出しエラー:", err);
    res.status(500).json({ reply: "陽菜…通信でちょっと失敗しちゃったみたい…" });
  }
}
