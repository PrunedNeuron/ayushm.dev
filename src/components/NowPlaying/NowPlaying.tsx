import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import MusicCard from "../ui/MusicCard/MusicCard";

const NowPlaying: React.FC = (): JSX.Element => {
	const [nowPlayingInitialized, setNowPlayingInitialized] = useState(false);
	const [nowPlaying, setNowPlaying] = useState({
		status: -1,
		album: "",
		albumImageUrl: "",
		artist: "",
		isPlaying: false,
		songUrl: "",
		title: ""
	});

	const getNowPlaying = async () => {
		return await axios({
			url: "https://ayushm.dev/api/spotify",
			method: "GET"
		});
	};

	useEffect(() => {
		const fetchNowPlaying = async () => {
			const result = await getNowPlaying();

			setNowPlaying(result.data);
			setNowPlayingInitialized(result.data.isPlaying);
		};

		fetchNowPlaying();
	});

	const placeHolder = {
		status: -1,
		album: "",
		albumImageUrl: "",
		artist: "Check back later",
		isPlaying: false,
		songUrl: "",
		title: "Not Playing"
	};

	if (!nowPlayingInitialized) return <MusicCard track={placeHolder} />;
	else return <MusicCard track={nowPlaying} />;
};

export default NowPlaying;
