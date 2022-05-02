import React from "react";
import { Project } from "./Project";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({projects}:ProjectListProps) {
  return <ul>{JSON.stringify(projects, null, " ")}</ul>
}

export default ProjectList;