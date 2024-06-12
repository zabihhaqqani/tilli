import sectionData from '@/data/sectionData';
import SectionCard from './SectionCard';

const Sections = () => {
    return (
        <div className="flex flex-col gap-5">
            {sectionData.map((data, index) => (
                <SectionCard key={index} data={data} index={index} />
            ))}
        </div>
    );
};

export default Sections;
