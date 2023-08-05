import { useLoaderData } from "react-router-dom";
import noUser from '../../assets/nouser.png'


const AllUsers = () => {
    const users = useLoaderData();
    return (
        <div className="overflow-hidden">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email & Number</th>
                        <th>Country</th>
                        <th>Postal Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr key={user._id}>
                            <td>
                                <div className="avatar">
                                    <div className="w-12 h-12 rounded-full border">
                                        <img src={user.photo || noUser} alt="User Photo" className="object-cover" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-semibold text-base">{user.name}</p>
                            </td>
                            <td>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                            </td>
                            <td>{user.country}</td>
                            <td>{user.postal}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;