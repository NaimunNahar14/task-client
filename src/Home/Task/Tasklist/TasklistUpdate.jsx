import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TasklistUpdate = () => {
    const update = useLoaderData();
    const { _id, status } = update;


    const handleUpdated = event => {
        event.preventDefault();
        const form = event.target;
        const updatedStatus = form.status.value;
        const updatedTask = { status: updatedStatus }; // Create a new task object with updated status

        fetch(`http://localhost:5000/task/${_id}`, {
            method: "PATCH", // Use the PATCH method for update
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.message === "Task updated successfully.") {
                    alert("Task updated successfully");
                }
            });
    };

    return (
        <div>
            <form onSubmit={handleUpdated}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">status</span>
                    </label>
                    <input type="text" name="status" defaultValue={status} className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="UPDATED" />
                </div>
            </form>
        </div>
    );
};

export default TasklistUpdate;