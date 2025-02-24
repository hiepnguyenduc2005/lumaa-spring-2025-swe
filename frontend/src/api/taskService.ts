import { request } from './apiCall';

interface newTask {
    title: string;
    description: string;
}

interface Task {
    title: string;
    description: string;
    iscomplete: boolean;
}

const getTasks = async () => {
    return request('GET', '/tasks');
}

const createTask = async (task: newTask) => {
    return request('POST', '/tasks', task);
}

const updateTask = async (id: string, task: Task) => {
    return request('PUT', `/tasks/${id}`, task );
}

const deleteTask = async (id: string) => {
    return request('DELETE', `/tasks/${id}`);
}

export default {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}