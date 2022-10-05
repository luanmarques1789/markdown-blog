import markdownStyles from './styles.module.css';

const Title = ({ title }) => {
	return <h1 className="text-5xl text-mavi-tone3 font-bold mb-8">{title}</h1>;
};

export default function Article({ content, title }) {
	return (
		<article>
			<Title title={title} />
			<hr />
			<div
				className={markdownStyles['markdown']}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</article>
	);
}
