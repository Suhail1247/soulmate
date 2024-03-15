// Import necessary modules and libraries
import { Router } from "express";
import * as controller from '../controller/controller.js';
import Auth from "../middleware/auth.js";
import multer from 'multer';



const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}_${file.originalname}`)
    }
}); 
const upload = multer({ storage: storage });
const router = Router();

router.route('/generateOtp').post(controller.generateOtp);
router.route('/register').post(controller.register);
router.route('/submitDetails').post(Auth,controller.submitDetails);
router.route('/getUser').get(Auth,controller.getUser);
router.route('/submitDP',).post(Auth,upload.array('imageUpload'),controller.submitDP);
router.route('/submitPhotos').post(Auth,upload.array('imageUpload'),controller.submitPhotos);
router.route('/getAllUsers').get(Auth,controller.getAllUsers);
router.route('/users/:userId').get(Auth, controller.getUserById);
router.route("/getPlan").get(Auth,controller.getPlan);
router.post('/create-subscription',Auth,controller.createSubscription)
export default router;