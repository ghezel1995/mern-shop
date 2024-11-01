//Router level middleware for /api/users routes
import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from '../controllers/userController.js';

router.route('/').post(registerUser).get(getUsers);

router.post('/logout', logoutUser);

router.post('/login', authUser);

router.route('/profile').get(getUserProfile).put(updateUserProfile);

router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
