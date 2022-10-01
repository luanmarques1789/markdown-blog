import NextLink from 'next/link';

export default function Link(props) {
	return (
		<NextLink href={props.href}>
			<a target={props.target ? props.target : '_self'}>{props.children}</a>
		</NextLink>
	);
}
