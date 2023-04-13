import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface DateProps {
    dateString: string;
}
export default function Date({ dateString }: DateProps) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}</time>;
}