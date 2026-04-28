const taskservice = require('../services/task.service');


const createtask = async (req, res, next) => {
    try {
        const task = await taskservice.createtask(req.body, req.user.id);
        res.status(201).json({
            message: 'tarea creada',
            task
        })
    } catch (error) {
        next(error);
    }
};

const gettask = async (req, res, next) => {
    try {
        const tasks = await taskservice.gettask(req.user.id);
        res.json(tasks)
    } catch (error) {
        next(error)
    }
};

const updatetask = async (req, res, next) => {
    try {
        const Task = await taskservice.updatetask(
            req.params.id,
            req.user.id,
            req.body
        );
        res.json({
            message: 'tarea actualizada',
            Task
        });
    } catch (error) {
        next(error);
    }
}
const deletetask = async(req,res,next)=>{
    try{
        await taskservice.deletetask(
            req.params.id,
            req.user.id
        );
        res.json({
            message:'tarea eliminada'
        })
    }catch(error){
        next(error)


    }
}

module.exports = {
    createtask,
    gettask,
    updatetask,
    deletetask
};