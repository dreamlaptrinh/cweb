import  express  from "express";
import { getAll } from '../controllers/product.js';
import { getDetail } from '../controllers/product.js';
import { create } from '../controllers/product.js';
import { update } from '../controllers/product.js';
import { remove } from '../controllers/product.js';

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getDetail);

router.post('/',create );

router.put('/:id', update);

router.delete('/:id', remove);


export default router 