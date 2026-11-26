import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	GOOGLE_SHEETS_API_KEY: {
        public: true
    },
    GOOGLE_SHEET_ID: {
        public: true
    }
});