interface VerticalTimelineElementProp {
    time: string;
    title: string;
    description: string;
    isLast?: boolean;  // Add this prop
}

function VerticalTimelineElement({ time, title, description, isLast }: VerticalTimelineElementProp) {
    const timelineClass = parseInt(time) % 2 === 1
        ? "timeline-end md:text-start mb-[70px] mt-5 ml-5"
        : "timeline-end md:text-start mb-[70px] mt-5 ml-5";

    return (
        <>
            <div className="timeline-middle text-[18px] text-[#6E9753] w-[50px] h-[50px] border-2 border-[#6E9753] rounded-full flex items-center justify-center">
                {time}
            </div>

            <div className={timelineClass}>
                <time className="text-[18px] font-bold font-[urbanist] pt-[8px]">Day {time} : {title}</time>
                <ul className="text-[#4f5e71] text-justify break-words mt-4 font-[urbanist] font-[500] flex flex-col gap-2 text-[16px] leading-[1.5em]"
                    dangerouslySetInnerHTML={{ __html: description }}>
                </ul>
            </div>

            {/* Conditionally render <hr /> only if it's NOT the last item */}
            {!isLast && <hr />}
        </>
    );
}

export default VerticalTimelineElement;
