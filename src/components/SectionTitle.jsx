
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-gray-700 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{heading}</h2>
            <p className="color-one font-medium">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;