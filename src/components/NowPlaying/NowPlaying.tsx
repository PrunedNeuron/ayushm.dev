import { fetcher } from "../../lib/fetcher";
import useSWR from "swr";
import { Text, Image, Card } from "@zeit-ui/react";
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

const NowPlaying = () => {
	const { data } = useSWR("/api/spotify", fetcher);
	const handleImage = (e) => e.preventDefault();
	return (
		<>
			<SpotifyCard>
				<AlbumArt>
					<Image
						src={data?.albumImageUrl}
						onContextMenu={handleImage}
						onClick={handleImage}
					></Image>
				</AlbumArt>
				<AlbumData>
					<Title title={data?.title}>
						<a
							href={data?.songUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							{data?.title}
						</a>
					</Title>
					<Artist>{data?.artist}</Artist>
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
