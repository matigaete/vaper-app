// import { application } from "express";
// import { findStock } from "./findStock.js";

// application.listen(process.env.PORT || 3000)
// while (true) {
//   const time = new Date()
//   console.log(`Script ejecutado a las ${time.toLocaleTimeString()} el día ${time.toDateString()}`)
//   await findStock()
//   await sleep(process.env.TIME_LAPSE || 10000) // 10 Seconds
// }

while (true) {
  sleep(2000)
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}