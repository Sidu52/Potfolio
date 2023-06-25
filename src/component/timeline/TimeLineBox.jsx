import React from "react";
import data from "../../content/data.json";
import './TimeLineBox.scss'

const Timeline = () => {
    return (
        <div id="timeline">
            <div className="timelinebox">
                {data.projects.map((i, index) => (
                    <TimelineItem
                        heading={i.title}
                        text={i.date}
                        index={index}
                        key={i.title}
                        url={i.url}
                    />
                ))}
            </div>
        </div>
    );
};

const TimelineItem = ({ heading, text, index, url }) => (
    <div
        className={`timelineitem ${index % 2 === 0 ? "lefttimeline" : "righttimeline"
            }`}
    >
        <a href={url} target="_blank">
            <div >
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>

        </a >
    </div>

);
export default Timeline;
