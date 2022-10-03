import fetch from 'node-fetch'

const BOT_TOKEN = process.env.BOT_TOKEN;

function sendMessage(chatId, text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

  return fetch(url);
}

export const handler = async (event) => {
  const body = JSON.parse(event.body);
  console.log(body);

  if (body.my_chat_member) {
    await sendMessage(body.my_chat_member.chat.id, `This chat's ID is ${body.my_chat_member.chat.id}`);
  }

  return { statusCode: 200 };
};
