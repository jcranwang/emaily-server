const express = require("express");
const app = express();
const authRouter = require("./routers/authRouter");
require("./services/passport");

app.use(authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT);