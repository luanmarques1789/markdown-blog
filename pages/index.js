// import Header from '../components/Header';
import Head from '../components/Next/Head';
import PostCard from '../components/PostCard';

import { getAllPosts } from '../Utils/Posts/posts';

export default function Home({ allPosts }) {
	return (
		<div className="">
			<Head>
				<title>Home</title>
				<meta name="description" content="Home do site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <Header /> */}
			{allPosts.map(({ slug, title, excerpt }, index) => (
				<PostCard key={index} slug={slug} title={title} excerpt={excerpt} />
			))}
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts(['slug', 'title', 'excerpt']);
	return {
		props: { allPosts },
	};
}
