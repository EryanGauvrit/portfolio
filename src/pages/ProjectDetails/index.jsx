import React from "react";
import ShowProjectDatas from "../../components/ShowProjectDatas";
import SlideShowProjectDetails from "../../components/SlideShowProjectDetails";

function ProjectDetails() {
    return (
        <React.Fragment>
            <SlideShowProjectDetails />
            <ShowProjectDatas />
        </React.Fragment>
    )
}

export default ProjectDetails;