import { useLoaderData } from "react-router-dom";
import noUser from '../../assets/nouser.png';
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import { Toaster, toast } from "react-hot-toast";

const Feedbacks = () => {
    const feedbacks = useLoaderData();

    const reviewHandle = (id) => {
        fetch(`https://collage-bookign-server.vercel.app/feedback/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Done!');
                } else {
                    toast.error("Error, Please try again!")
                }
            })
    }

    return (
        <div className="overflow-hidden">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Feedback</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        feedbacks.map(feedback => <tr key={feedback._id}>
                            <td>
                                <div className="avatar">
                                    <div className="w-12 h-12 rounded-full border">
                                        <img src={feedback.userPhoto || noUser} alt="User Photo" className="object-cover" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-semibold text-base">{feedback.userName}</p>
                            </td>
                            <td>
                                <p>{feedback.userEmail}</p>
                            </td>
                            <td>
                                <p>{feedback.feedback}</p>
                            </td>
                            <td>{feedback.rating}</td>
                            <td>
                                <Toggle
                                    id='cheese-status'
                                    defaultChecked={feedback.status === 'approval' ? true : false}
                                    onClick={() => {reviewHandle(feedback._id)}} />
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Feedbacks;