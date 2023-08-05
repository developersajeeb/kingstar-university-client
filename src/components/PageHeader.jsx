
// eslint-disable-next-line react/prop-types
const PageHeader = ({banner, heading, subHeading}) => {
    return (
        <section style={{backgroundImage: `url(${banner})`}} className='text-white text-center py-28 md:py-32 px-4 bg-no-repeat bg-cover bg-center'>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{heading}</h2>
            <p className="font-medium">{subHeading}</p>
        </section>
    );
};

export default PageHeader;