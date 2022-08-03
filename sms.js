import fetch from 'node-fetch'

const { AUTH, API_KEY, API_HOST, API_URL } = process.env

const sendSms = async (text, phoneNumber) => {
  const body = {
    messages: [{
      source: 'mashape',
      from: 'Vaper App',
      body: text,
      to: phoneNumber,
      schedule: '1452244637',
      custom_string: 'Vaper'
    }
    ]
  }

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: AUTH,
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    },
    body: JSON.stringify(body)
  };

  fetch(API_URL, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

export default sendSms