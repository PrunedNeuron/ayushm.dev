import { Loading, Row } from "@zeit-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Dashboard from "../../../components/Dashboard/Dashboard";
import { API_KEY, BASE_URL } from "../../../lib/constants";
import { IconRequest } from "../../../typings/types";

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
		if (typeof window !== "undefined") {
			// eslint-disable-next-line no-undef
			const signedInUser = localStorage.getItem("user");
			if (signedInUser) {
				setSignedIn(true);
			} else {
				router.push("/dashboard/login");
			}
		}
	}, [router]);

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
