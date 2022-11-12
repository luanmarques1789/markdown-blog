import Link from '../components/Next/Link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
	return (
		<>
			<Header />
			<div className={'not-found'}>
				<h1>Ooooops!</h1>
				<h2>Esta página não pode ser encontrada.</h2>
				<p className="text-center">
					<Link href={'/'}>Volte para a Home</Link>
				</p>
			</div>
			<Footer />
		</>
	);
}
