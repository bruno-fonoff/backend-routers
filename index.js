const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require("./routers/user.routes");
app.use("/user", userRouter);

// const addressRouter = require("./routers/address.routes");
// app.use("/address", addressRouter);

app.listen(4000, () => {
  console.log("Server Running at Port 4000.");
});
