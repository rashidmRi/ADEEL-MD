const { cmd } = require("../command");
const fetch = require("node-fetch");
const yts = require("yt-search");

// 🎵 YouTube Audio Downloader with Thumbnail & Title + ADEEL-MD Tag
cmd({
  pattern: "play",
  alias: ["song", "mp3"],
  desc: "Download YouTube Audio with Thumbnail and Title",
  category: "downloader",
  react: "💓✅",
  filename: __filename
}, async (conn, msg, args, { from, q, reply }) => {
  try {
    if (!q) {
      return reply("Please provide a YouTube link or search query.\n\nExample: .play Pasoori");
    }

    let videoUrl, videoInfo;

    // If user provides a direct YouTube link
    if (q.includes("youtube.com") || q.includes("youtu.be")) {
      videoUrl = q;
      videoInfo = (await yts({ videoId: videoUrl.split("v=")[1] || videoUrl })).videos[0];
    } else {
      // Otherwise, search for the video
      let search = await yts(q);
      if (!search || !search.videos || search.videos.length === 0) {
        return reply("No results found.");
      }
      videoInfo = search.videos[0];
      videoUrl = videoInfo.url;
    }

    // 🔹 Send video details first (thumbnail + title)
    await conn.sendMessage(from, {
      image: { url: videoInfo.thumbnail },
      caption: `🎵 *Title:* ${videoInfo.title}\n👁️ *Views:* ${videoInfo.views}\n📅 *Published:* ${videoInfo.ago}\n🔗 *Link:* ${videoUrl}\n\n⏳ *Downloading audio...*\n\n🪄 *𝐀𝐃𝐄𝐄𝐋-𝐌𝐃*`
    }, { quoted: msg });

    // Fetch audio using API
    let res = await fetch(`https://gtech-api-xtp1.onrender.com/api/audio/yt?apikey=APIKEY&url=${encodeURIComponent(videoUrl)}`);
    let data = await res.json();

    if (!data.status) {
      return reply("Failed to fetch audio.");
    }

    let { audio_url } = data.result.media;

    // 🎧 Send the audio file
    await conn.sendMessage(from, {
      audio: { url: audio_url },
      mimetype: "audio/mpeg",
      ptt: false
    }, { quoted: msg });

  } catch (err) {
    reply("❌ Error while fetching audio.");
    console.log(err);
  }
});
