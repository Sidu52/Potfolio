import React from "react";
import data from "../../content/data.json";
import './TimeLineBox.scss'

const Timeline = () => {
    return (
        <div id="timeline">
            <div className="timelinebox">
                {data.projects.map((i, index) => (
                    <div
                        className={`timelineitem ${index % 2 === 0 ? "lefttimeline" : "righttimeline"
                            }`}
                    >
                        <a href={i.url} target="_blank">
                            <div >
                                <h2>{i.title}</h2>
                                <p>{i.date}</p>
                            </div>

                        </a >
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
