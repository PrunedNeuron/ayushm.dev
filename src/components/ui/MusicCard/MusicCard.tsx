import { MusicOff } from "@styled-icons/material-rounded/MusicOff";
import { Spotify } from "@styled-icons/remix-fill/Spotify";
import { Image } from "@zeit-ui/react";
import React, { useContext } from "react";

import ThemeContext from "../../Contexts/ThemeContext";
import Icon from "../Icon/Icon";
import {
	AlbumArt,
	AlbumData,
	Artist,
	SpotifyCard,
	SpotifyCardContainer,
	SpotifyIcon,
	Title
} from "./Styles";

interface Props {
	track: {
		status: number;
		album: string;
		albumImageUrl: string;
		artist: string;
		isPlaying: boolean;
		songUrl: string;
		title: string;
	};
}

const MusicCard: React.FC<Props> = (props: Props): JSX.Element => {
	const theme = useContext(ThemeContext);
	const handleImage = (e: React.MouseEvent) => e.preventDefault();
	return (
		<>
			<SpotifyCardContainer>
				{props.track?.albumImageUrl !== "" ? (
					<SpotifyIcon>
						<Icon color="#33f289" size="22px" hoverable>
							<a
								// eslint-disable-next-line no-secrets/no-secrets
								href="https://open.spotify.com/user/3gjvv8nvwtb8n5il2tu4fbxbx"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Spotify />
							</a>
						</Icon>
					</SpotifyIcon>
				) : (
					""
				)}
				<SpotifyCard dark={theme.activeTheme === "dark"}>
					<AlbumArt>
						{props.track?.albumImageUrl === "" ? (
							<Icon color="#ff144b" size="30px">
								<MusicOff />
							</Icon>
						) : (
							<Image
								src={props.track?.albumImageUrl}
								onContextMenu={handleImage}
								onClick={handleImage}
							></Image>
						)}
					</AlbumArt>

					<AlbumData>
						<Title title={props.track?.title}>
							{props.track?.albumImageUrl !== "" ? (
								<a
									href={props.track?.songUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									{props.track?.title}
								</a>
							) : (
								<>{props.track?.title}</>
							)}
						</Title>
						<Artist>{props.track?.artist}</Artist>
					</AlbumData>
				</SpotifyCard>
			</SpotifyCardContainer>
		</>
	);
};

export default MusicCard;
