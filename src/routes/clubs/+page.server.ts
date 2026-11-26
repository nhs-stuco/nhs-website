import { GOOGLE_SHEETS_API_KEY, GOOGLE_SHEET_ID } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { ClubInfo } from '../../lib/components/ClubCard.svelte';

export const load: PageServerLoad = async ({ fetch }) => {
  const sheetName = 'Clubs'; 
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${encodeURIComponent(sheetName)}?key=${GOOGLE_SHEETS_API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    return { clubs: [] };
  }

  const data = await res.json();
  const rows: string[][] = data.values ?? [];

  // Skip the first row (headers) and map columns A–G
  const clubs: ClubInfo[] = rows.slice(1).map((row) => ({
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