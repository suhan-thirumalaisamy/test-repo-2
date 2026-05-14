import { Router, Request, Response } from "express";

const router = Router();

/**
 * GET /health
 * Returns the health status of the application
 */
router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;
