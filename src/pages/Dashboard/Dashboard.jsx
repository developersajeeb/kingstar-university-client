import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
    const userData = useLoaderData();

    return (
        <section>
            <div className="border p-4 rounded-lg text-lg font-semibold relative">
                <h3>Personal Information</h3>
                <div className="md:flex gap-14 mt-4">
                    <div>
                        <div>
                            <span className="text-gray-400 text-sm font-normal">Name</span>
                            <p className="text-sm font-medium">{userData?.name || 'No Mail Here'}</p>
                        </div>
                        <div className="mt-6">
                            <span className="text-gray-400 text-sm font-normal">Email Address</span>
                            <p className="text-sm font-medium">{userData?.email || 'No Email Here'}</p>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <div>
                            <span className="text-gray-400 text-sm font-normal">Phone</span>
                            <p className="text-sm font-medium">{userData?.phone || 'No Phone Number'}</p>
                        </div>
                        <div className="mt-6">
                            <span className="text-gray-400 text-sm font-normal">University</span>
                            <p className="text-sm font-medium">{userData?.university || 'No University'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border p-4 rounded-lg text-lg font-semibold relative mt-8">
                <h3>Address</h3>
                <div className="md:flex gap-14 mt-4">
                    <div>
                        <div>
                            <span className="text-gray-400 text-sm font-normal">Country</span>
                            <p className="text-sm font-medium">{userData?.country || 'No Country'}</p>
                        </div>
                        <div className="mt-6">
                            <span className="text-gray-400 text-sm font-normal">City/State</span>
                            <p className="text-sm font-medium">{userData?.city || 'No City/State'}</p>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <div>
                            <span className="text-gray-400 text-sm font-normal">Postal Code</span>
                            <p className="text-sm font-medium">{userData?.postal || 'No Postal/Zip Code'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border p-4 rounded-lg text-lg font-semibold relative mt-8">
                <h3>Bio</h3>
                <p className="text-sm font-medium mt-4 text-gray-500">
                    {
                        userData?.bio || <span className="text-gray-400 font-normal flex justify-center mb-10">No Data Here</span>
                    }
                </p>
            </div>
        </section>
    );
};

export default Dashboard;