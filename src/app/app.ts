import { App, Request, Response } from "https://deno.land/x/attain/mod.ts";

const app = new App();

app.use((req: Request, res: Response) => {
  res.status(404).send("not found")
})


app.listen({port: 3333}, () => console.log('Server running...'))