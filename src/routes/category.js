import  express  from "express";
import { checkPermission } from "../middlewares/checkPermission.js";
import { create, getAll, getDetail, remove, update } from "../controllers/category.js";


const routerCate = express.Router();

routerCate.get('/', getAll);

routerCate.get('/:id', getDetail);

routerCate.post('/',checkPermission, create );

routerCate.put('/:id',checkPermission, update);

routerCate.delete('/:id',checkPermission, remove);


export default routerCate 