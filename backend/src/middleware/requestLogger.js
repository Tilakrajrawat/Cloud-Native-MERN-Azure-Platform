import { logger } from "../utils/logger.js";

export const requestLogger = (req, res, next) => {
  logger.trackTrace("incoming_request", { method: req.method, url: req.originalUrl });
  next();
};
