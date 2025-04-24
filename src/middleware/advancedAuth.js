import { auth } from "express-oauth2-jwt-bearer";
const authMiddleware = auth({
  audience: "https://event-api/",
  issuerBaseURL: "https://dev-yph0iwch6uw0nw6k.us.auth0.com/",
});
