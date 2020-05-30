import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Body } from "https://deno.land/x/oak/request.ts";
import { findAllData, createData, deleteData, updateData } from "./service.ts";

const router = new Router();

router
  .get("/", (ctx: RouterContext) => {
    ctx.response.body = "Hello World";
  })
  .get("/data", async (ctx: RouterContext) => {
    ctx.response.body = await findAllData();
  })
  .post("/data", async (ctx: RouterContext) => {
    const body: Body = await ctx.request.body();

    ctx.response.body = await createData(body.value);
  })
  .put("/data/:id", async (ctx: RouterContext) => {
    const body: Body = await ctx.request.body();

    ctx.response.body = await updateData(ctx.params.id, body.value);
  })
  .delete("/data/:id", async (ctx: RouterContext) => {
    ctx.response.body = await deleteData(ctx.params.id);
  });

export default router;
