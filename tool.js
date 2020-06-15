const { runDouyin } = require('./core');
const fs = require('fs');

async function tool() {
  // https://v.douyin.com/JdbBqog/ 这段url 是dy地址
  const { videoStream, share_title } = await runDouyin(
    'https://v.douyin.com/JdbBqog/'
  );
  videoStream.pipe(fs.createWriteStream(`${share_title}(无水印).mp4`)); // 下载到本地
}

tool();
