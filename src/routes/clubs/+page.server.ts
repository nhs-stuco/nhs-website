import { GOOGLE_SHEET_ID, GOOGLE_SHEETS_API_KEY } from '$app/env/public';
import type { PageServerLoad } from './$types';

export interface ClubInfo {
	name: string;
	description: string;
	room: string;
	day: string;
	studentLeader: string;
	teacher: string;
	instagram?: string;
}

export const load: PageServerLoad = async ({ fetch }) => {
	console.log('--- LOADING CLUBS ---');
	const sheetName = 'Sheet1';
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${encodeURIComponent(sheetName)}?key=${GOOGLE_SHEETS_API_KEY}`;

	const res = await fetch(url);
	if (!res.ok) {
		console.error('Google Sheets API Error:', res.status, await res.text());
		return { clubs: [] };
	}

	const data = await res.json();
	console.log('Google Sheets response:', JSON.stringify(data, null, 2));

	const rows: string[][] = data.values ?? [];

	const clubs: ClubInfo[] = rows
		.slice(1)
		.filter((row) => row[0]?.trim())
		.map((row) => ({
			name: row[0] ?? '',
			description: row[1] ?? '',
			room: row[2] ?? '',
			day: row[3] ?? '',
			studentLeader: row[4] ?? '',
			teacher: row[5] ?? '',
			instagram: row[6] || undefined
		}));

	return { clubs };
};