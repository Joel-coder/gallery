let ImageSchema = require("../models/image");
import { Request, Response, Router } from 'express';
import controller from '../controller/images';

const p = {
    get: '/get',
    post: '/post'
} as const;

const router = Router();

router.get(p.get, controller.getAllImages)

router.post(p.post, controller.saveImages)


export default router;