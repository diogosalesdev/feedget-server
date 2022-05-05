import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: '05fb345cb76db3',
		pass: '170e623d966bd9'
	}
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'Diogo Sales <giogosalesdev@gmail.com>',
			subject,
			html: body
		});
	}
}
