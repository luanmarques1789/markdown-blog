import styles from './styles.module.css';
import Link from '../Next/Link';

/**
 * Component of navigation buttons among posts
 * @param {Object} props
 * @param {String} props.previousPost
 * @param {String} props.nextPost
 * @returns
 */
export default function PostsNavigation({ previousPost, nextPost }) {
	return (
		<div className="mt-10">
			{previousPost != null && (
				<Link href={previousPost}>
					<button className={styles['button']}>Anterior</button>
				</Link>
			)}
			{nextPost != null && (
				<Link href={nextPost}>
					<button className={styles['button']}>Próximo</button>
				</Link>
			)}
		</div>
	);
}
