import DateFormatter from '../DateFormatter.jsx';
import Link from '../Next/Link.jsx';

const Title = ({ title }) => {
	return <h2 className="text-3xl text-mavi-tone3 font-bold">{title}</h2>;
};

export default function PostCard({ slug, title, excerpt, publishedDate }) {
	return (
		<div className="mb-10">
			<div className="mb-2">
				<Link href={`/posts/${slug}`}>
					<Title title={title} />
				</Link>
				<span className="text-sm text-gray-400">
					<DateFormatter dateString={publishedDate} />
				</span>
			</div>
			<p>{excerpt}</p>
		</div>
	);
}
