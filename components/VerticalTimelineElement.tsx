interface VerticalTimelineElementProp {
    time: string;
    title: string;
    description: string | string[];
    images?: { src: string; alt: string }[];
    isLast?: boolean;
}

function VerticalTimelineElement({
    time,
    title,
    description,
    images = [],
    isLast,
}: VerticalTimelineElementProp) {
    const timelineClass =
        parseInt(time) % 2 === 1
            ? "timeline-end md:text-start mb-[70px] ml-[-5px] mr-5 sm:ml-5 sm:mr-0 mt-2 sm:mt-5"
            : "timeline-end md:text-start mb-[70px] ml-[-5px] mr-5 sm:ml-5 sm:mr-0 mt-2 sm:mt-5";

    // Normalize description to array
    const descriptionLines = Array.isArray(description) ? description : [description];

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
            />

            {/* Timeline Marker */}
            <div className="timeline-middle text-[12px] sm:text-[18px] text-[#6E9753] w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] border-2 border-[#6E9753] rounded-full flex items-center justify-center">
                <i className="fas fa-circle fa-flip-horizontal text-[9px] sm:hidden"></i>
                <span className="hidden sm:block">{time}</span>
            </div>

            {/* Content */}
            <div className={timelineClass}>
                <time className="text-[18px] font-bold font-[urbanist] pt-0 pl-[10px] sm:pl-0 block">
                    Day {time} : {title}
                </time>

                <div className="flex flex-col sm:flex-row gap-8 mt-4 text-[#4f5e71] text-justify font-[urbanist] font-medium text-[16px] leading-[1.5em]">
                    {/* Description */}
                    <div className="w-full sm:w-1/2 flex flex-col justify-center gap-2 pl-2 sm:pl-0">
                        {Array.isArray(description) ? (
                            description.map((para, idx) => <p key={idx}>{para}</p>)
                        ) : (
                            <p>{description}</p>
                        )}
                    </div>

                    {/* Images */}
                    {images.length > 0 && (
                        <div className="w-full sm:w-1/2 flex items-stretch">
                            <div className="w-full flex items-center justify-center">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img.src}
                                        alt={img.alt}
                                        className="rounded-[20px] object-cover h-full w-full sm:w-auto max-h-[500px]"
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Horizontal Line */}
            {!isLast && <hr />}
        </>
    );
}

export default VerticalTimelineElement;
