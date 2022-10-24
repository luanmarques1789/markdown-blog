import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function DateFormatter({ dateString }) {
	const date = parseISO(dateString);
	return (
		<time dateTime={dateString}>
			{format(date, "d 'de' MMM 'de' Y 'às' HH'h'mm", { locale: ptBR })}
		</time>
	);
}
