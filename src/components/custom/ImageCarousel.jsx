import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const ImageCarousel = () => {
    const images = [
        'https://tilli.pro/wp-content/uploads/2023/12/tilli-software-products-2024.png',
        'https://tilli.pro/wp-content/uploads/2023/12/nudge-customer-communication-platform-live-dashboard.png',
        'https://tilli.pro/wp-content/uploads/2023/12/tilli-cx-customer-engagement-live-dashboard.png',
        'https://tilli.pro/wp-content/uploads/2023/12/monay-payments-stack-dashboard.png',
    ];

    return (
        <div className="md:w-[80%] object-cover block h-auto md:max-w-[600px] md:min-w-[350px] md:ml-[50px] md:px-3 w-[70%]">
            {/* Mobile View*/}
            <div className="block md:hidden">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`img-${index}`}
                        className="w-full mb-4"
                    />
                ))}
            </div>

            {/* Desktop View  */}
            <div className="hidden md:block">
                <Carousel>
                    <CarouselContent>
                        {images.map((src, index) => (
                            <CarouselItem key={index}>
                                <img src={src} alt={`img-${index}`} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default ImageCarousel;
