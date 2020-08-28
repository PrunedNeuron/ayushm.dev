import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard: React.FC = (): JSX.Element => {
	const router = useRouter();
	const limit = 4;
	useEffect(() => {
		router.prefetch(
			"/dashboard/[offset]/[limit]",
			`/dashboard/${limit}/${limit}`
		);
		router.push("/dashboard/[offset]/[limit]", `/dashboard/0/${limit}`);
	}, [router]);
	return <div></div>;
};

export default Dashboard;
