import { Router, Request, Response } from "express";

const router = Router();

// In-memory users store (no DB)
const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];

/**
 * GET /users
 * Returns the list of all users
 */
router.get("/users", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

/**
 * GET /users/:id
 * Returns a single user by ID
 */
router.get("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    res.status(404).json({
      success: false,
      message: `User with id ${req.params.id} not found`,
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

export default router;
