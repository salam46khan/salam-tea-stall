
const MiddleTitle = ({title, subtitle}) => {
    return (
        <div className="text-center">
            <p className="font-extrabold text-4xl">{title}</p>
            <hr className="w-[250px] mx-auto border-2"/>
            <p className="w-full md:w-1/2 mx-auto mt-3">{subtitle}</p>
        </div>
    );
};

export default MiddleTitle;