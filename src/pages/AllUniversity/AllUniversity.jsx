import { Toaster, toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Toggle from "react-toggle";


const AllUniversity = () => {
    const allUniversity = useLoaderData();

    const reviewHandle = (id) => {
        fetch(`https://collage-bookign-server.vercel.app/university/${id}`, {
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
                        <th>University Name</th>
                        <th>Location</th>
                        <th>Make Top</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUniversity.map(university => <tr key={university._id}>
                            <td>
                                <p className="font-semibold text-base">{university.name}</p>
                            </td>
                            <td>
                                <p>{university.location}</p>
                            </td>
                            <td>
                                <Toggle
                                    id='cheese-status'
                                    defaultChecked={university.rank === 'top' ? true : false}
                                    onClick={() => { reviewHandle(university._id) }} />
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUniversity;