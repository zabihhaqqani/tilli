import React from 'react';

const SectionCard = ({ data, index }) => {
    return (
        <div
            className={`flex flex-col items-center text-center justify-center mb-4 pb4   ${
                index % 2 !== 0 ? 'bg-[#F5F7FA]' : ''
            } `}
        >
            <div className="flex items-center md:flex-row flex-col">
                <div className="md:max-w-[450px] text-left mx-3 mt-5">
                    <span className="bg-blue-800 py-1 rounded-[80px] inline-block text-white px-5 my-2">
                        {data.title}
                    </span>
                    <h1 className="md:text-3xl text-2xl font-bold text-black ">
                        {data.category}
                    </h1>
                    <p className=" text-gray-700 mt-4 my-1 text-[0.9rem]">
                        {data.description}
                    </p>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-700">
                        {data.btn}
                    </button>
                    {data.link ? (
                        <a
                            href="#"
                            className="text-orange-500 text-base mt-4 hover:underline block my-3"
                        >
                            {data.link} →
                        </a>
                    ) : (
                        ''
                    )}
                </div>
                <img
                    src={data.imgUrl}
                    alt="main-img"
                    className="w-[80%] object-cover block h-[auto] md:max-w-[500px] md:min-w-[350px] mx-3 px-3 "
                />
            </div>
        </div>
    );
};

export default SectionCard;
