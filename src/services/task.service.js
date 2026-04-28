const task = require('../models/task.model')

const createtask = async (data,userid)=>{
    const Task = await task.create({
        ...data,
        user:userid
    }); return task;

};

const gettask = async (userid)=>{
    return await task.find({user:userid})
};

const updatetask = async (taskId,userid,data)=>{
    const Task =  await task.findById(taskId);
    if(!Task){
        throw new Error ('Tarea no existe')
    }

 // validacion 
  if (Task.user.toString()!== userid){
    throw new Error('No autorizado') 
  } 
  const updatedtask = await task.findByIdAndUpdate(
    taskId,
    data,
    {new:true}
  );
  return updatedtask;

}

const deletetask = async (taskId, userid)=>{
    const Task = await task.findById(taskId)
    if(!Task){
        throw new Error ('tarea no existe')
    }

    if(Task.user.toString()!== userid){
        throw new Error('No autorizado')
    }
    await task.findByIdAndDelete(taskId);
    return true;
}




module.exports = {
    createtask,
    gettask,
    updatetask,
    deletetask
}