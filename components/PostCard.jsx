import Link from './Next/Link.jsx';

export default function PostCard({ slug, title, excerpt, image }) {
	return (
		<div className="bg-blue-100">
			<Link href={`/posts/${slug}`}>
				<h2>{title}</h2>
			</Link>
			<p>{excerpt}</p>
		</div>
	);
}
