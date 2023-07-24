import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const Colleges = () => {
    const allUniversity = useLoaderData();

    return (
        <main className="px-5 py-20 md:p-40">
            <SectionTitle heading={'All Listed College'} subHeading={'Here is a list of all the colleges currently listed'} />
            <section className='mt-16 grid md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    allUniversity?.map(university => <div key={university._id}>

                    </div>)
                }
            </section>
        </main>
    );
};

export default Colleges;