import NextHead from 'next/head';

export default function Head({ children }) {
	return (
		<NextHead>
			{children}
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</NextHead>
	);
}
