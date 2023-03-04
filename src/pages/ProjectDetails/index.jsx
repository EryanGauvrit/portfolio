import React from "react";
import SlideShowProjectDetails from "../../components/SlideShowProjectDetails";

function ProjectDetails() {
    return (
        <React.Fragment>
            <SlideShowProjectDetails />
            <main className="project-details-main">
                Project details
            </main>
        </React.Fragment>
    )
}

export default ProjectDetails;