import Link from './Next/Link';
import { Avatar } from '@material-tailwind/react';

const Brand = () => {
	return (
		<div className="flex">
			<div className="">
				<Link href="/">
					<Avatar
						src={'/assets/images/photo2.jpg'}
						alt="Circular avatar"
						variant="circular"
						size="lg"
					/>
				</Link>
			</div>
			{/* <ul className="">
				<li>Luan Marques</li>
			</ul> */}
		</div>
	);
};

export default function Header() {
	const sourceCode = 'https://github.com/luanmarques1789/markdown-blog';

	return (
		<header className="w-full py-10 mb-6">
			<nav className="w-full flex">
				<Brand />
				<div className="w-full flex items-center justify-end">
					<ul className="flex flex-row">
						<li className="mr-3">
							<Link href="/posts">Artigos</Link>
						</li>
						<li className="mr-3">
							<Link href="/sobre">Sobre</Link>
						</li>
						<li>
							<Link href={sourceCode} target="_blank">
								GitHub
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
