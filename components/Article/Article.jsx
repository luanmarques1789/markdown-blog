import DateFormatter from '../DateFormatter';
import styles from './styles.module.css';

const Title = ({ title }) => {
	return <h1 className="text-5xl text-mavi-tone3 font-bold mb-2">{title}</h1>;
};

export default function Article({ post }) {
	return (
		<article>
			<Title title={post.title} />
			<div className="mb-4">
				<small>
					<span>
						Publicado em <DateFormatter dateString={post.publishedDate} />
						{post.updateDate && (
							<span>
								{' ⬩ Atualizado em '}
								<DateFormatter dateString={post.updateDate} />
							</span>
						)}
					</span>
				</small>
			</div>
			<div className="mb-10">
				<h2 className="text-3xl mb-8">Resumo</h2>
				<div
					className="indent-10"
					dangerouslySetInnerHTML={{ __html: post.excerpt }}
				/>
			</div>
			<hr />
			<div
				className={styles['markdown']}
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</article>
	);
}
