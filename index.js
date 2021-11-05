const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>";
});

router.get("/hakkimda", (ctx, next) => {
  ctx.body = "<h1>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h1>";
});

router.get("/iletisim", (ctx, next) => {
  ctx.body = "<h1>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h1>";
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port);
