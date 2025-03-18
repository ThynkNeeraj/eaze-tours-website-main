interface VerticalTimelineElementProp {
    time: string;
    title: string;
    description: string;
    isLast?: boolean;  // Add this prop
}

function VerticalTimelineElement({ time, title, description, isLast }: VerticalTimelineElementProp) {
    const timelineClass = parseInt(time) % 2 === 1
        ? "timeline-end md:text-start mb-[70px] ml-[-5px] mr-5 sm:ml-5 sm:mr-0 mt-2 sm:mt-5"
        : "timeline-end md:text-start mb-[70px] ml-[-5px] mr-5 sm:ml-5 sm:mr-0 mt-2 sm:mt-5";

    return (
        <>
            <div className="timeline-middle text-[12px] sm:text-[18px] text-[#6E9753] w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] border-2 border-[#6E9753] rounded-full flex items-center justify-center">
                {time}
            </div>

            <div className={timelineClass}>
                <time className="text-[18px] font-bold font-[urbanist] pt-[0px] pl-[10px] sm:pl-[0px] block">Day {time} : {title}</time>
                <ul className="package_detail text-[#4f5e71] text-justify break-words mt-4 font-[urbanist] font-[500] flex flex-col gap-2 text-[16px] leading-[1.5em]"
                    dangerouslySetInnerHTML={{ __html: description }}>
                </ul>
            </div>

            {/* Conditionally render <hr /> only if it's NOT the last item */}
            {!isLast && <hr />}
        </>
    );
}

export default VerticalTimelineElement;
