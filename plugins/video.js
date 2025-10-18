const axios = require("axios");
const yts = require("yt-search");
const { cmd } = require("../command");

cmd({
  pattern: "video",
  alias: ["videodl"],
  react: "🎥",
  desc: "Download HD drama from YouTube (link or search query)",
  category: "youtube",
  use: ".drama <YouTube URL or drama name>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  if (!args[0]) return reply("🎥 *Please provide a drama name or YouTube video URL! ADEEL-MD*");

  const q = args.join(" ");
  const apiKey = "APIKEY"; // apna API key lagao
  let videoUrl, title, thumbnail, channel, views;

  try {
    // Initial ⏳ reaction
    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    // Check if input is a valid YouTube URL
    const isUrl = q.startsWith("http");

    if (isUrl) {
      videoUrl = q;
    } else {
      // Search with yt-search
      const search = await yts(q);
      if (!search.videos || !search.videos.length)
        return reply("❌ No results found for your query.");

      const vid = search.videos[0];
      videoUrl = vid.url;
      title = vid.title;
      thumbnail = vid.thumbnail;
      channel = vid.author?.name || "Unknown Channel";
      views = vid.views || "N/A";

      // Send info card before video
      await conn.sendMessage(from, {
        image: { url: thumbnail },
        caption: `🎬 *${title}*\n\n🎥 Channel *${channel}*\n👁️ Views *${views}*\n🔗 ${videoUrl}`
      }, { quoted: mek });
    }

    // Download HD video
    const dlApi = `https://gtech-api-xtp1.onrender.com/api/video/yt?apikey=${apiKey}&url=${encodeURIComponent(videoUrl)}`;
    const { data } = await axios.get(dlApi);

    if (!data.status || !data.result?.media?.video_url_hd)
      return reply("⚠️ Failed to fetch video. Try another link or query.");

    const { media } = data.result;

    // Send video (no caption)
    await conn.sendMessage(from, {
      video: { url: media.video_url_hd },
      mimetype: "video/mp4"
    }, { quoted: mek });

    // ✅ Final reaction
    await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

  } catch (err) {
    console.error(err);
    reply("⚠️ Error occurred while processing your video request.");
  }
});
