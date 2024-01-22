import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  console.log('INICIANDO A PÁGINA');

  await page.goto('https://www.youtube.com/');

  await page.type('input[name="search_query"]', 'TESTE');

  await page.click('button#search-icon-legacy');
  await page.waitForNavigation();
  await page.setViewport({ width: 1080, height: 1024 });

  console.log('FIM');

  await new Promise(resolve => setTimeout(resolve, 5000));

  await browser.close();
})();
