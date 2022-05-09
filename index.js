const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const { token } = require("./config.json");

client.once("ready", () => {
  // 봇 서버가 실행되면, 딱 한번만 실행하는 함수
  console.log(`실험봇이 활성화되었습니다`);
});

client.login(token); // 토큰에 내 봇 토큰 입력
