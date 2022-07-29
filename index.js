import { findStock } from "./findStock.js";

while (true) {
  const time = new Date()
  console.log(`Script ejecutado a las ${time.toLocaleTimeString()} el día ${time.toDateString()}`)
  await findStock()
  await sleep(10000) // 10 Seconds
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}