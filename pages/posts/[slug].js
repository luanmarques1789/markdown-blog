import { getAllPosts, getPostBySlug } from '../../Utils/Posts/posts';
import markdownToHtml from '../../Utils/markdownParser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Article from '../../components/Article/Article';

export default function Post({ post }) {
	return (
		<>
			<Header />
			<Article title={post.title} content={post.content}></Article>
			<Footer />
		</>
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
