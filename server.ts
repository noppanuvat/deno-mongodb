import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts"

const app = new Application();
const port = 3000;

app.use(async (ctx, next) => {
  console.log(`Method : ${ctx.request.method}, URL : ${ctx.request.url}`);
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
console.log(`Started listen port : ${port}`);
