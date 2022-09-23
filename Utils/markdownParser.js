import { remark } from 'remark';
import html from 'remark-html';

/**
 * Convert markdown syntax/content to HTML syntax/content
 * @param {String} markdown Markdown content
 * @returns rendered HTML content
 */
export default async function markdownToHtml(markdown) {
	const result = await remark().use(html).process(markdown);
	return result.toString();
}
