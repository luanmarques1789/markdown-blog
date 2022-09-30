import Image from './Next/Image.jsx';
import Link from './Next/Link.jsx';

export default function PostCard({ index, slug, title, excerpt, image }) {
	return (
		<div
			style={{
				marginBottom: '5px',
				display: 'block',
				backgroundColor: 'red',
				width: '100%',
				height: '100%',
			}}
		>
			<Link href={`/posts/${slug}`}>
				<Image
					src={image.src}
					alt={image.description}
					width={200}
					height={200}
				/>
				<h2>{title}</h2>
			</Link>
			<p>{excerpt}</p>
		</div>
	);
}
