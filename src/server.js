import express from "express";
import * as Sentry from "@sentry/node";
import log from "./middleware/logMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";
import notFoundErrorHandler from "./middleware/notFoundErrorHandler.js";
import UnauthorizedErrorHandler from "./middleware/unauthorizedErrorHandler.js";
import eventsRouter from "./routes/events.js";
import loginRouter from "./routes/login.js";
import categoryRouter from "./routes/categories.js";
import userRouter from "./routes/users.js";
import "dotenv/config";

const app = express();
const PORT = 3000;

Sentry.init({
  dsn: "https://60cddb702f1996d26929d6c00723ba7e@o4509151195758592.ingest.de.sentry.io/4509159305576528",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use(log);

app.use("/events", eventsRouter);
app.use("/login", loginRouter);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(Sentry.Handlers.errorHandler());
app.use(errorHandler);
app.use(notFoundErrorHandler);
app.use(UnauthorizedErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
