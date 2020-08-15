import { fetcher } from "../../lib/fetcher";
import axios from "axios";
import { Image, Spinner } from "@zeit-ui/react";
import {
	Title,
	Artist,
	AlbumArt,
	SpotifyCard,
	AlbumData,
	SpotifyIcon
} from "./Styles";
import Icon from "../ui/Icon/Icon";
import { Spotify } from "@styled-icons/remix-fill/Spotify";
import { useState, useEffect } from "react";

const NowPlaying = () => {
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

	const handleImage = (e) => e.preventDefault();

	if (!nowPlayingInitialized) return <Spinner size="small" />;
	else
		return (
			<>
				<SpotifyCard>
					<AlbumArt>
						<Image
							src={nowPlaying?.albumImageUrl}
							onContextMenu={handleImage}
							onClick={handleImage}
						></Image>
					</AlbumArt>
					<AlbumData>
						<Title title={nowPlaying?.title}>
							<a
								href={nowPlaying?.songUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{nowPlaying?.title}
							</a>
						</Title>
						<Artist>{nowPlaying?.artist}</Artist>
					</AlbumData>
					<SpotifyIcon>
						<Icon color="#33f289" size="18px">
							<Spotify />
						</Icon>
					</SpotifyIcon>
				</SpotifyCard>
			</>
		);
};

export default NowPlaying;
