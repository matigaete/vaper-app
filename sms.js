import fetch from 'node-fetch'

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
      Authorization: 'Basic bWF0aS5nYWV0ZS5wb25jZUBnbWFpbC5jb206TUB0aWFzMTk5NTQwNTEz',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'b134d96c62mshafe8ce68148309bp172d5fjsn9f3b7f74fc09',
      'X-RapidAPI-Host': 'clicksend.p.rapidapi.com'
    },
    body: JSON.stringify(body)
  };

  fetch('https://clicksend.p.rapidapi.com/sms/send', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

export default sendSms