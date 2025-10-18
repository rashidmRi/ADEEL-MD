const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename,
  use: "<Facebook URL>",
}, async (conn, m, store, { from, args, q, reply }) => {
  try {
    // Check if a valid Facebook URL is provided
    if (!q || !q.startsWith("http")) {
      return reply("*❌ Please provide a valid Facebook video link!*\n\nExample: `.fb https://www.facebook.com/...`");
    }

    // React loading emoji
    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    // Working API (HD + Fast)
    const apiUrl = `https://api.nyx.my.id/dl/fb?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    // Validate response
    if (!data || !data.result || !data.result.url) {
      return reply("❌ Couldn't fetch the video. Try another Facebook link.");
    }

    const videoUrl = data.result.url;

    // Send the video
    await conn.sendMessage(from, {
      video: { url: videoUrl },
      caption: "📥 *Facebook Video Downloaded Successfully*\n\n- *© 𝐀𝐃𝐄𝐄𝐋-𝐌𝐃 🤍*"
    }, { quoted: m });

    // React success emoji
    await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

  } catch (error) {
    console.error("Error:", error.message);
    reply("❌ Error fetching the video. Please try again later.");
  }
});
