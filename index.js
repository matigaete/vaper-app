// @ts-check
import { chromium } from 'playwright-chromium'
import { flavours, selections, vaper } from './constants.js'
import sendSms from './sms.js'


const exec = async () => {
  const browser = await chromium.launch({ headless: true })
  const available = []

  for (const flavour of flavours) {
    const { checkStock, url } = vaper
    const { nombre, route } = flavour

    const page = await browser.newPage()
    await page.goto(`${url}/${route}`)

    const hasStock = await checkStock({ page })
    if (hasStock) available.push(nombre)

    const log = `${nombre}: ${hasStock ? 'Hay stock!' : 'No hay todavía, F'}`

    console.log(log)

    //await page.screenshot({ path: `screenshots/${nombre}.png` })
    await page.close()
  }
  
  if (available.length > 0) {
    const availableProducts = available.join(', ')
    const availableOn = `LLEEEEEGO STOCK DE: ${availableProducts} corre ctmmmmm 🏃🏻💨`
    const selected = selections.find((select) => available.find((av) => select.favorites.includes(av)))
    if (selected) {
      const { phoneNumber } = selected
      sendSms(availableOn, phoneNumber)
    }
  } else {
    console.log('Aún nada 🥲')
  }
  await browser.close()
}

exec()