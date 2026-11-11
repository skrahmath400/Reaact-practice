import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const URL = "http://localhost:8888/api/tasks";

const TaskApp = () => {
    const queryClient = useQueryClient();

    const [taskdata, setTaskdata] = useState({
        title: "",
        assignee: "",
        dueDate: "",
        completed: false
    });

    // ============ GET ALL ============
    const { data: tasks, isLoading, error } = useQuery({
        queryKey: ['taskdata'],
        queryFn: async () => {
            const response = await axios.get(URL);
            return Array.isArray(response.data)
                ? response.data
                : response.data?.data ?? [];
        }
    });

    // ============ POST — Create ============
    const { mutate: createTask } = useMutation({
        mutationFn: (payload) => axios.post(URL, payload),
        onSuccess: () => {
            alert("Task Created! ✅");
            queryClient.invalidateQueries(['taskdata']); // Refresh list!
            setTaskdata({ title: "", assignee: "", dueDate: "", completed: false });
        },
        onError: () => alert("Failed to create! ❌")
    });

    // ============ PUT — Update ============
    const { mutate: updateTask } = useMutation({
        mutationFn: (payload) => axios.put(`${URL}/${payload.tid}`, payload),
        onSuccess: () => {
            alert("Task Updated! ✅");
            queryClient.invalidateQueries(['taskdata']); // Refresh list!
            setTaskdata({ title: "", assignee: "", dueDate: "", completed: false });
        },
        onError: () => alert("Failed to update! ❌")
    });

    // ============ DELETE ============
    const { mutate: deleteTask } = useMutation({
        mutationFn: (tid) => axios.delete(`${URL}/${tid}`),
        onSuccess: () => {
            alert("Task Deleted! ✅");
            queryClient.invalidateQueries(['taskdata']); // Refresh list!
        },
        onError: () => alert("Failed to delete! ❌")
    });

    // Fill form for editing
    const handleEdit = (task) => {
        setTaskdata(task); // Pre-fill form with selected task!
    };

    if (isLoading) return <p>⏳ Loading...</p>;
    if (error) return <p>❌ Error loading tasks!</p>;

    return (
        <div>
            {/* FORM */}
            <input
                value={taskdata.title}
                onChange={(e) => setTaskdata({ ...taskdata, title: e.target.value })}
                placeholder="Title"
            /><br />
            <input
                value={taskdata.assignee}
                onChange={(e) => setTaskdata({ ...taskdata, assignee: e.target.value })}
                placeholder="Assignee"
            /><br />
            <input
                type="date"
                value={taskdata.dueDate || ""}
                onChange={(e) => setTaskdata({ ...taskdata, dueDate: e.target.value })}
            /><br />
            <input
                type="checkbox"
                checked={taskdata.completed}
                onChange={(e) => setTaskdata({ ...taskdata, completed: e.target.checked })}
            /> Completed<br />

            {/* BUTTONS */}
            <button onClick={() => createTask(taskdata)}>
                ➕ Create Task
            </button>
            <button onClick={() => updateTask(taskdata)}>
                ✏️ Update Task
            </button>

            {/* TABLE */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Assignee</th>
                        <th>Due Date</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task, index) => (
                        <tr key={index}>
                            <td>{task.title}</td>
                            <td>{task.assignee}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.completed ? "Yes" : "No"}</td>
                            <td>
                                <button onClick={() => handleEdit(task)}>
                                    ✏️ Edit
                                </button>
                                <button onClick={() => deleteTask(task.tid)}>
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskApp;