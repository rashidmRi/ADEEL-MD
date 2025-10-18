const { cmd } = require("../command");
const fetch = require("node-fetch");
const yts = require("yt-search");

// 🎵 YouTube Audio Downloader with Thumbnail & Title
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
      return reply("براہ کرم یوٹیوب لنک یا سرچ لکھیں۔\n\nمثال: .play Pasoori");
    }

    let videoUrl, videoInfo;

    // اگر لنک دیا گیا ہو
    if (q.includes("youtube.com") || q.includes("youtu.be")) {
      videoUrl = q;
      videoInfo = (await yts({ videoId: videoUrl.split("v=")[1] || videoUrl })).videos[0];
    } else {
      // سرچ رزلٹ سے پہلی ویڈیو لو
      let search = await yts(q);
      if (!search || !search.videos || search.videos.length === 0) {
        return reply("کوئی نتیجہ نہیں ملا۔");
      }
      videoInfo = search.videos[0];
      videoUrl = videoInfo.url;
    }

    // 🔹 پہلے ویڈیو کی معلومات شو کرو (thumbnail + title)
    await conn.sendMessage(from, {
      image: { url: videoInfo.thumbnail },
      caption: `🎵 *Title:* ${videoInfo.title}\n👁️ *Views:* ${videoInfo.views}\n📅 *Published:* ${videoInfo.ago}\n🔗 *Link:* ${videoUrl}\n\n⏳ *Downloading audio...*`
    }, { quoted: msg });

    // 🔗 پھر آڈیو حاصل کرو
    let res = await fetch(`https://gtech-api-xtp1.onrender.com/api/audio/yt?apikey=APIKEY&url=${encodeURIComponent(videoUrl)}`);
    let data = await res.json();

    if (!data.status) {
      return reply("آڈیو حاصل کرنے میں ناکامی ہوئی۔");
    }

    let { audio_url } = data.result.media;

    // 🎧 اب آڈیو بھیجنا
    await conn.sendMessage(from, {
      audio: { url: audio_url },
      mimetype: "audio/mpeg",
      ptt: false
    }, { quoted: msg });

  } catch (err) {
    reply("❌ آڈیو حاصل کرنے میں خرابی ہوئی۔");
    console.log(err);
  }
});
