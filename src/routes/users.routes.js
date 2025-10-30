import express from 'express';
import { authenticateToken, requireRole } from '../middleware/auth.middleware.js';
import { deleteUserById, fetchAllUsers, fetchUserById, updateUserById } from '../controllers/users.controller.js';


const userRoutes = express.Router();

// GET /users - Get all users (admin only)
userRoutes.get('/', authenticateToken, requireRole(['admin']), fetchAllUsers);

// GET /users/:id - Get user by ID (authenticated users only)
userRoutes.get('/:id', authenticateToken, fetchUserById);

// PUT /users/:id - Update user by ID (authenticated users can update own profile, admin can update any)
userRoutes.put('/:id', authenticateToken, updateUserById);

// DELETE /users/:id - Delete user by ID (admin only)
userRoutes.delete('/:id', authenticateToken, requireRole(['admin']), deleteUserById);

export default userRoutes;