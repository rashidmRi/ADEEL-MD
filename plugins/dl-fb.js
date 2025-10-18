const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Download Facebook videos (HD/SD select)",
  category: "download",
  filename: __filename,
  use: "<Facebook URL>",
}, async (conn, m, store, { from, q, reply }) => {
  try {
    // Validate link
    if (!q || !q.startsWith("http")) {
      return reply("❌ Please provide a valid Facebook video link.\n\nExample: `.fb https://www.facebook.com/...`");
    }

    // React loading
    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    // Use API for fetching Facebook data
    const apiUrl = `https://vihangayt.me/download/facebook?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    // Check response
    if (!data || !data.result) {
      return reply("❌ Failed to fetch Facebook video info. Try again later.");
    }

    const hd = data.result.hd;
    const sd = data.result.sd;
    const title = data.result.title || "Unknown Title";
    const thumb = data.result.thumbnail || "https://i.imgur.com/nFJ4cJX.png";

    // Send title and thumbnail
    await conn.sendMessage(from, {
      image: { url: thumb },
      caption: `🎬 *${title}*\n\n🔽 Select Video Quality:\n\n1️⃣ HD Quality\n2️⃣ SD Quality\n\n👉 Reply with 1 or 2 to download.\n\n- *© 𝐀𝐃𝐄𝐄𝐋-𝐌𝐃 🤍*`
    }, { quoted: m });

    // Wait for user's reply
    conn.ev.once('messages.upsert', async (msgData) => {
      try {
        const userMsg = msgData.messages[0];
        if (!userMsg.message?.conversation) return;

        const choice = userMsg.message.conversation.trim();
        let videoUrl = null;
        let quality = "";

        if (choice === "1" && hd) {
          videoUrl = hd;
          quality = "HD";
        } else if (choice === "2" && sd) {
          videoUrl = sd;
          quality = "SD";
        } else {
          return reply("❌ Invalid option or that quality not available.");
        }

        // Send selected video
        await conn.sendMessage(from, {
          video: { url: videoUrl },
          caption: `📥 *${title}*\n🎞️ *Quality:* ${quality}\n\n- *© 𝐀𝐃𝐄𝐄𝐋-𝐌𝐃 🤍*`
        }, { quoted: userMsg });

        // React success
        await conn.sendMessage(from, { react: { text: "✅", key: m.key } });
      } catch (err) {
        console.error("Choice Error:", err.message);
        reply("⚠️ Error handling your response. Try again.");
      }
    });

  } catch (error) {
    console.error("FB Error:", error.message);
    reply("⚠️ Error fetching the Facebook video. Please try again later.");
  }
});
