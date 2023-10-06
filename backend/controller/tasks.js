import { Tasks } from "../schema/task.js";



export const addTask =async(req, res)=>{
    try {
        const { id } = req.params;
        const { tittle } = req.body;
        await Tasks.create({
            ListId: id, tittle
        })
        res.status(200).json({
            success: true,
            message: "successful create"
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            error
        })
    }
}

export const deleteTask =async(req, res)=>{
    try {
        const { id } = req.params;
        const isTask = await Tasks.findByIdAndDelete(id);
        if (isTask) {
            res.status(200).send('Task deleted successfully.');
          } else {
            res.status(404).send('Task not found.');
          }
    } catch (error) {
        res.status(500).send('Error deleting the task.');
    }
}

export const updateTask =async(req, res)=>{
    try {
        const { id } = req.params;
        const {tittle} = req.body;
        const isTask = await Tasks.findByIdAndUpdate(id, {tittle:tittle});
        if (isTask) {
            res.status(200).send('Task updated successfully.');
          } else {
            res.status(404).send('Task not found.');
          }
    } catch (error) {
        res.status(500).send('Error updating the task.');
    }
}

export const getTasks =async(req, res)=>{
    const {id}=req.params;
    const isTasks = await Tasks.find({ListId:id})

    if(!isTasks){
        return res.json({
            message:"empty tasks!"
        })
    }

    res.status(200).json({isTasks})
}