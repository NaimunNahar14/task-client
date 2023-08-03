import React from 'react';
import SectionTitle from '../../Components/SectionTitle';

const AddedTask = () => {
    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const email = form.email.value;
        const status = form.status.value;
        const likes = form.likes.value;
        const bio = form.bio.value;
        const add = {
             title,
            email,
            likes,
            status,
            bio,
        }
        console.log(add);

        fetch('https://task-server-nu.vercel.app/task', {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Task added successfully')
                }
            })



    }
    return (
        <div  className='mt-10 mb-10'>
         <SectionTitle title={"ADDED TASK"}></SectionTitle>
            <form onSubmit={handleAdd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">email</span>
                        </label>
                        <input type="text" name="email"  className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <input type="text" name='status' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name='likes' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details Description</span>
                    </label>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" name='bio' ></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="ADDED" />
                </div>
            </form>
        </div>
    );
};

export default AddedTask;