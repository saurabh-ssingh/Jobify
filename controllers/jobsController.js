const createJob = async (req,res) =>{
    res.send('Job created');

}

const deleteJob = async (req,res) =>{
    res.send('Job Deleted')
}

const getAllJobs = async (req,res) =>{
    res.send('get All jobs')
}

const updateJob = async (req,res) =>{
    res.send('Job updated')
}

const showStats = async (req,res) =>{
    res.send('show stats')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }