export type DeepPartial<T> = {
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
