import Head from '../components/Head';
import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css';

import { getAllPosts } from '../Utils/Posts/posts';

export default function Home({ allPosts }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home</title>
				<meta name="description" content="Home do site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{allPosts.map(({ slug, title, excerpt, image }, index) => (
				<PostCard
					key={index}
					slug={slug}
					title={title}
					excerpt={excerpt}
					image={image}
				/>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts(['slug', 'title', 'excerpt', 'image']);
	return {
		props: { allPosts },
	};
}
