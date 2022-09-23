import { getAllPosts, getPostBySlug } from '../../Utils/Posts/posts';
import markdownToHtml from '../../Utils/markdownParser';

export default function Post({ post }) {
	return (
		<div>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</div>
	);
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, ['title', 'excerpt', 'content']);
	const content = await markdownToHtml(post.content || '');

	return {
		props: { post: { ...post, content } },
	};
}
