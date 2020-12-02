import puppeteer from "puppeteer";

let browser;
let page;

// 2
beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto("http://localhost:9000/");
});

describe("<CourseList />", () => {
  test("It has title", async () => {
    await page.waitForSelector(".ng-course-list");
    const title = await page.$eval("h2", e => e.innerHTML);
    expect(title).toBeDefined()
  });

  test("It has course cards", async (done) => {
    await page.waitForSelector(".cards");
    const cards = await page.$$('.ng-course-card')
    expect(cards.length).toBeTruthy()
    done()
  });
})


// 4
afterAll(() => {
  browser.close();
});
