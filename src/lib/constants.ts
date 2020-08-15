export const FIRST_NAME = "Ayush";
export const LAST_NAME = "Mishra";
export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`;
export const env = process.env.NODE_ENV || "development";
// export const isProduction = env == "production" ? true : false;

export const isProduction = true;
export const PORT = 3000;
export const BASE_URL = isProduction
	? "https://ayushm.dev/api"
	: `http://localhost:${PORT}`;
export const API_KEY = "so9ZcJc1jm";