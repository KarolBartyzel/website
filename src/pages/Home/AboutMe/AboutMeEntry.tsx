import { InformationModel } from "./AboutMe.model";

export const AboutMeEntry = ({ name, value }: InformationModel) => {
    return (
        <div className="flex flex-col items-center mx-6 border-gray-500">
            <div className="flex flex-col items-center px-4 gap-3">
                <p className="text-md">{name}</p>
                <h3 className="text-lg font-bold font-mono">{value}</h3>
            </div>
        </div>
    );
};