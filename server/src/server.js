import dotenv from "dotenv";
dotenv.config();

import app from "./configs/app.js";
import "./configs/db.js";

//starting server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
