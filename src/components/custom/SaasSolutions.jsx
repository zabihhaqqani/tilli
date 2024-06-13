import images from '@/data/images';
import ImageCarousel from './ImageCarousel';

const SaaSSolutions = () => {
    return (
        <div className="flex flex-col items-center text-center pt-[10px]  bg-[#F5F7FA] pb-3 md:pt-[100px] lg:[110px] ">
            <div className="flex items-center md:flex-row flex-col">
                <div className="max-w-[450px] text-left mx-3">
                    <h1 className=" font-bold text-black md:text-3xl text-2xl  ">
                        A Cloud-Based Customer Communication Platform
                        as a Service and a Global Payment Stack
                    </h1>
                    <p className=" text-gray-700 mt-4 my-1 text-[0.9rem]">
                        Create an integrated payment and communication
                        experience with Nudge, a Customer
                        Communication Platform that brings WhatsApp,
                        SMS, eMail, IVRS, Push Notifications, etc.,
                        under one roof and Monay, a Global Payment
                        Stack that processes payments through credit
                        card, debit card, netbanking, ACH, UPI,
                        wallet, and APMs.
                    </p>
                    <p className="text-base text-gray-600 mt-2 max-w-2xl my-1 text-[0.9rem]">
                        Get started with Tilli’s Customer
                        Communication
                    </p>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-700">
                        Free Trial
                    </button>
                    <div className="flex items-center justify-">
                        <a
                            href="#"
                            className="text-orange-500 text-base mt-4 hover:underline block my-3"
                        >
                            Or schedule a time with our product
                            specialist →
                        </a>
                    </div>
                </div>

                <ImageCarousel />
            </div>
            <img
                src="https://tilli.pro/wp-content/uploads/2022/04/certifications.png"
                alt="certificates-img"
                className="md:max-w-[450px] h-auto object-cover"
            />
            <div className="text-gray-500 text-sm mt-12">
                TRUSTED BY BUSINESSES AROUND THE WORLD
            </div>
            <div className="flex justify-center gap-8 mt-4 flex-wrap">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        title={image.title}
                        srcSet={`${image.srcset.desktop}, ${image.srcset.hover}`}
                        sizes={image.sizes}
                        className="h-12 opacity-80 transition-opacity duration-200 hover:opacity-100 cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
};

export default SaaSSolutions;
