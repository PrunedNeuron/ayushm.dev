export type DeepPartial<T> = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[P in keyof T]?: T[P] extends Record<string, any>
		? DeepPartial<T[P]>
		: T[P];
};

export type IconRequest = {
	name: string;
	component: string;
	url: string;
	requesters: string;
	status: string;
};

export type Children = {
	children: React.ReactNode;
};
