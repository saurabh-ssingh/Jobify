import express from "express";
const router = express.Router();
import { 
    createJob, 
    deleteJob, 
    getAllJobs, 
    updateJob, 
    showStats 
} from '../controllers/jobsController.js';

//GET method is used to retrieve data from server.
//POST method is used to send data to the server and create a new resource.
//The PUT method is most often used to update an existing resource.
//The DELETE method is used to delete a resource specified by its URI.

//The PATCH method is very similar to the PUT method 
//because it also modifies an existing resource. 




router.route('/').post(createJob).get(getAllJobs)
// place before :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)
    
export default router