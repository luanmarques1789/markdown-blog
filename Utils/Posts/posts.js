import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Get file names into the posts directory
 * @returns {string[]} Return an array of files name
 */
function getPostFiles() {
	return fs.readdirSync(postsDirectory);
}

/**
 *
 * @param {String} slug - full post file name
 * @param {String[]} fields - post fields that include frontmatter and post content
 * @returns Post object with its metadata
 */
export function getPostBySlug(slug, fields) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = path.join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	// Use gray-matter to parse the post metadata section'
	const { data: frontmatter, content } = matter(fileContents);

	const items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (typeof frontmatter[field] !== 'undefined') {
			items[field] = frontmatter[field];
		}
	});

	return items;
}

/**
 * Get all posts specifying desired fields
 * @param {String[]} fields - desired/specified post fields (post content and/or frontmatter)
 * @returns An array of posts (objects)
 */
export function getAllPosts(fields = []) {
	const postFiles = getPostFiles();
	const posts = postFiles
		.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) =>
			post1.publishedDate > post2.publishedDate ? -1 : 1
		);

	return posts;
}
