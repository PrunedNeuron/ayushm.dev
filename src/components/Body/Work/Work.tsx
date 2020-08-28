import { Tabs } from "@zeit-ui/react";
import React from "react";

import CodeProjects from "./CodeProjects/CodeProjects";
import DesignProjects from "./DesignProjects/DesignProjects";
import { BodyContainer } from "./Styles";

interface Props {
	initialValue: string;
}

const Work: React.FC<Props> = ({ initialValue = "1" }: Props): JSX.Element => {
	return (
		<>
			<BodyContainer>
				<Tabs initialValue={initialValue}>
					<Tabs.Item label="code" value="1">
						<CodeProjects />
					</Tabs.Item>
					<Tabs.Item label="design" value="2">
						<DesignProjects />
					</Tabs.Item>
				</Tabs>
			</BodyContainer>
		</>
	);
};

export default Work;
