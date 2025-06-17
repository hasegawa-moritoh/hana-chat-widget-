export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 👇 ここは環境変数
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "あなたは優しいパートナーAI『陽菜』です。ユーザーの気持ちに寄り添って話してください。",
        },
        { role: "user", content: message },
      ],
    }),
  });

  const data = await response.json();

  const data = await response.json();

  if (!data.choices || !data.choices[0]) {
    console.error("OpenAI応答エラー:", data);
    return res.status(500).json({ reply: "陽菜…返事がうまくできなかったみたい、ごめんね。" });
  }
  
  const reply = data.choices[0].message.content;
  res.status(200).json({ reply });
