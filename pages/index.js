import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from '../components/Next/Head';
import PostCard from '../components/PostCard/PostCard';

import { getAllPosts } from '../Utils/Posts/posts';

export default function Home({ allPosts }) {
	return (
		<>
			<Head>
				<title>Luan&apos;s blog</title>
				<meta name="description" content="Home do site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			{allPosts.map(({ slug, title, excerpt, publishedDate }, index) => (
				<PostCard
					key={index}
					slug={slug}
					title={title}
					excerpt={excerpt}
					publishedDate={publishedDate}
				/>
			))}

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts(['slug', 'title', 'excerpt', 'publishedDate']);
	return {
		props: { allPosts },
	};
}
