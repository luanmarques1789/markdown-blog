import NextImage from 'next/image';

export default function Image(props) {
	return (
		<NextImage
			src={props.src}
			alt={props.alt}
			width={props.width}
			height={props.height}
			layout={props.layout ?? ''}
		></NextImage>
	);
}
