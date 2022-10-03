import Link from './Next/Link';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	const socialMedias = {
		github: 'https://github.com/luanmarques1789',
		linkedin: 'https://www.linkedin.com/in/luanmarques1789/',
		email: 'mailto:dev.luanmarques@gmail.com',
	};

	const iconSize = 'h-6 w-6';

	return (
		<footer className="w-full h-20 py-10 mt-5 flex flex-wrap self-end items-center justify-center">
			<div className="w-full flex items-center justify-center">
				<Link href={socialMedias.github} target="_blank">
					<FontAwesomeIcon className={iconSize + ' mr-5'} icon={faGithub} />
				</Link>
				<Link href={socialMedias.email} target="_blank">
					<FontAwesomeIcon className={iconSize + ' mr-5'} icon={faEnvelope} />
				</Link>
				<Link href={socialMedias.linkedin} target="_blank">
					<FontAwesomeIcon className={iconSize} icon={faLinkedin} />
				</Link>
			</div>
			<div className="mt-5">
				<p>
					Made with{' '}
					<span className="inline-block">
						<small>
							<FontAwesomeIcon
								className={`text-red-600	${iconSize}`}
								icon={faHeart}
							/>
						</small>
					</span>
				</p>
			</div>
		</footer>
	);
}
