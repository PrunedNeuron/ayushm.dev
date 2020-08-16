import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../../lib/constants";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { useRouter } from "next/router";
import { Row, Loading } from "@zeit-ui/react";
import { IconRequest } from "../../../../types";

type Props = {
	requests: IconRequest[];
	offset: number;
	limit: number;
	pendingCount: number;
	doneCount: number;
};

const Requests: React.FC<Props> = ({
	requests,
	offset,
	limit,
	pendingCount,
	doneCount
}: Props) => {
	const [signedIn, setSignedIn] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const signedInUser = localStorage.getItem("user");
		if (signedInUser) {
			setSignedIn(true);
		} else router.push("/dashboard/login");
	}, []);

	if (signedIn) {
		return (
			<Dashboard
				iconRequests={requests}
				offset={offset}
				limit={limit}
				pendingCount={pendingCount}
				doneCount={doneCount}
			/>
		);
	} else {
		return (
			<Row style={{ padding: "10px 0" }}>
				<Loading />
			</Row>
		);
	}
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { offset, limit } = context.params;

	const requests = (
		await axios({
			method: "GET",
			url: `${BASE_URL}/requests/${offset}/${limit}`,
			headers: {
				"X-API-KEY": API_KEY
			}
		})
	).data;

	const pendingCountResponse = (
		await axios({
			method: "GET",
			url: `${BASE_URL}/requests/count/pending`,
			headers: {
				"X-API-KEY": API_KEY
			}
		})
	).data;

	const doneCountResponse = (
		await axios({
			method: "GET",
			url: `${BASE_URL}/requests/count/done`,
			headers: {
				"X-API-KEY": API_KEY
			}
		})
	).data;

	return {
		props: {
			requests: requests,
			offset: offset,
			limit: limit,
			pendingCount: parseInt(pendingCountResponse.count),
			doneCount: parseInt(doneCountResponse.count)
		}
	};
};

export default Requests;
