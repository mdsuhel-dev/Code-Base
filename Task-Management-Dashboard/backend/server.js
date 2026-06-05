import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/database.js";


async function startServer() {
  try {
    await connectDB();

    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();