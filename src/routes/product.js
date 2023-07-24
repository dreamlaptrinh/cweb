import  express  from "express";
import { getAll } from '../controllers/product.js';
import { getDetail } from '../controllers/product.js';
import { create } from '../controllers/product.js';
import { update } from '../controllers/product.js';
import { remove } from '../controllers/product.js';
import { checkPermission } from "../middlewares/checkPermission.js";

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getDetail);

router.post('/',checkPermission, create );

router.put('/:id',checkPermission, update);

router.delete('/:id',checkPermission, remove);


export default router 