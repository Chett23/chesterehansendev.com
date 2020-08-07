import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { Row, Card } from "./Containers.js";
import { Title, Text } from "./Text.js";

const Iframe = styled.img`
	width: ${({ title }) => (title === "Dice Bag App" ? "auto" : "100%")};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	height: 200px;
`;
const ProjectsCont = styled(Row)`
	justify-content: center;
	align-self: center;
	flex-wrap: wrap;
	padding: 75px 10px;
	width: 90%;
	@media (max-width: 720px) {
		padding-top: 25px 10px;
	}
`;
const InfoCont = styled.div`
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	background-color: #7b7263;
	display: flex;
	flex-direction: column;
	height: 100px;
	padding: 10px;
`;
const ProjectText = styled(Text)`
	margin: 0 10pt;
`;

//Querys
const GET_PROJECTS = gql`
	query {
		projects {
			title
			description
			url
			imgUrl
			order
			id
		}
	}
`;

function Projects() {
	const { loading: projectsLoading, error: projectsError, data } = useQuery(
		GET_PROJECTS
	);

	if (projectsError) {
		console.log(projectsError);
	}

	return (
		<ProjectsCont>
			{projectsLoading ? (
				<Title>Loading . . . </Title>
			) : (
				data &&
				data.projects
					.sort((a, b) => a.order - b.order)
					.map((project) => {
						return (
							<Card href={project.url} target={"_blank"} key={project.id}>
								<Iframe title={project.title} src={project.imgUrl} />
								<InfoCont>
									<Title>{project.title}</Title>
									<ProjectText>{project.description}</ProjectText>
								</InfoCont>
							</Card>
						);
					})
			)}
		</ProjectsCont>
	);
}

export default Projects;
