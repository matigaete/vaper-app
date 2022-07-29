// @ts-check
const { chromium } = require('playwright-chromium')
const { flavours, vaper } = require('./constants')

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

  const availableOn = available.length > 0
    ? `Disponible los siguientes sabores: ${available.join(', ')}`
    : 'No hay stock 😢'

  await browser.close()
}

exec()
