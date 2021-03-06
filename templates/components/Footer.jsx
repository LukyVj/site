import Container from 'tamia/lib/components/Container';
import Link from 'tamia/lib/components/Link';
import s from './Footer.pcss';

export default function Footer() {
	return (
		<Container component="footer" class={s.root}>
			Made with coffee in Berlin by <Link href="http://sapegin.me/">Artem Sapegin</Link> and <Link href="https://github.com/styleguidist/react-styleguidist/graphs/contributors">amazing contributors</Link>. Logo by <Link href="http://okonet.ru/">Andrey Okonetchnikov</Link> and <Link href="http://iamsaravieira.com/">Sara Vieira</Link>. Hosted on <Link href="https://www.netlify.com/">Netlify</Link>. <Link href="https://github.com/styleguidist/site">Site sources</Link>
		</Container>
	);
}
