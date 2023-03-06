import React from "react";
import BackToProjectsPage from "../../components/BackToProjectsPage";
import ShowProjectDatas from "../../components/ShowProjectDatas";
import SlideShowProjectDetails from "../../components/SlideShowProjectDetails";

function ProjectDetails() {
    return (
        <React.Fragment>
            <SlideShowProjectDetails />
            <BackToProjectsPage />
            <ShowProjectDatas />
        </React.Fragment>
    )
}

export default ProjectDetails;