import Link from './Next/Link.jsx';

const Title = ({ title }) => {
	return <h2 className="text-3xl text-mavi-tone3 font-bold mb-3">{title}</h2>;
};

export default function PostCard({ slug, title, excerpt, image }) {
	return (
		<div className="mb-10">
			<Link href={`/posts/${slug}`}>
				<Title title={title} />
			</Link>
			<p>{excerpt}</p>
		</div>
	);
}
