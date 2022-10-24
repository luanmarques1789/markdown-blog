import { getAllPosts, getPostBySlug } from '../../Utils/Posts/posts';
import markdownToHtml from '../../Utils/markdownParser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Article from '../../components/Article/Article';
import PostsNavigation from '../../components/PostsNavigation/PostsNavigation';

/**
 *
 * @param {{post: Object, nextPost: String, previousPost: String}} props
 * @returns
 */
export default function Post({ post, nextPost, previousPost }) {
	return (
		<>
			<Header />
			<Article post={post} />
			<PostsNavigation previousPost={previousPost} nextPost={nextPost} />
			<Footer />
		</>
	);
}

// Next.js will statically pre-render all the paths specified by it
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
	const post = getPostBySlug(params.slug, [
		'title',
		'excerpt',
		'content',
		'publishedDate',
		'updateDate',
	]);
	const content = await markdownToHtml(post.content || '');

	const allPosts = getAllPosts(['slug', 'publishedDate']);

	// Converting array of objects to simple array
	const slugs = allPosts.map(function (obj) {
		return obj.slug;
	});

	const currentPost = slugs.indexOf(params.slug);

	const nextPost = currentPost - 1 != -1 ? slugs.at(currentPost - 1) : null;

	const previousPost =
		currentPost + 1 < slugs.length ? slugs.at(currentPost + 1) : null;

	return {
		props: { post: { ...post, content }, nextPost, previousPost },
	};
}
