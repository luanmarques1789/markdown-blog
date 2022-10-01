import NextLink from 'next/link';

export default function Link({ href, target, children }) {
	return (
		<NextLink href={href}>
			<a
				target={target ? target : '_self'}
				rel={target === '_blank' ? 'noopener' : ''}
			>
				{children}
			</a>
		</NextLink>
	);
}
