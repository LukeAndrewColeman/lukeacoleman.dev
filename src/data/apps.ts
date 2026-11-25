import type { ImageMetadata } from 'astro';
import snappeaIcon from '../assets/snappea/icon.png';
import sqlLabIcon from '../assets/sql-lab/icon.png';
import blurloomIcon from '../assets/blurloom/icon.png';

export interface App {
	name: string;
	/** URL path of the app's page, e.g. `snappea` → /snappea/ */
	slug: string;
	/** Short line used in the header dropdown. */
	tagline: string;
	/** One or two sentences for the homepage card. */
	summary: string;
	icon: ImageMetadata;
	/** Leave out until the app is live; it then shows as "Coming soon". */
	appStoreUrl?: string;
}

/**
 * Every app on the site. The header dropdown, the homepage Apps section and
 * the footer all read from this list, so a new app only needs adding here
 * (plus its own page in src/pages/<slug>/).
 */
export const apps: App[] = [
	{
		name: 'SnapPea',
		slug: 'snappea',
		tagline: 'Recipe scanner & meal planner',
		summary: 'Snap a cookbook page, plan your week and let your shopping list write itself.',
		icon: snappeaIcon,
		appStoreUrl: 'https://apps.apple.com/gb/app/recipe-scanner-snappea/id6833429259',
	},
	{
		name: 'SQL Lab',
		slug: 'sql-lab',
		tagline: 'Learn SQL with query puzzles',
		summary: 'Build real queries from tokens, race for three stars, then type them from memory.',
		icon: sqlLabIcon,
		appStoreUrl: 'https://apps.apple.com/gb/app/learn-sql-sql-lab/id6804661210',
	},
	{
		name: 'Blurloom',
		slug: 'blurloom',
		tagline: 'Calm wallpapers for your Mac',
		summary: 'Turn any photo or a few colours into a calm desktop wallpaper, and copy the gradient as CSS.',
		icon: blurloomIcon,
		// No appStoreUrl yet: Blurloom is coming soon.
	},
];

/** Looks up an app by slug. Throws at build time if the slug is wrong. */
export function getApp(slug: string): App {
	const app = apps.find((candidate) => candidate.slug === slug);
	if (!app) throw new Error(`No app with slug "${slug}" in src/data/apps.ts`);
	return app;
}
