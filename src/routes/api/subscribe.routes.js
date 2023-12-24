import { Router } from 'express';
import { subscribeToPlan } from '../../controllers/user.subscription';
import { protectRoute } from '../../middlewares/auth.middleware';

const route = Router();

route.post('/subscribe-plan/:planId', protectRoute, subscribeToPlan);

export default route;
