import type { RequestHandler } from './$types'
import { json, error, redirect } from '@sveltejs/kit'
// import mg from '$cm/mailgun.js';
// import cache from '$cm/cache.js';
// import dotenv from 'dotenv';

// dotenv.config();

export const POST: RequestHandler = async ({ request }) => {
    const { message, name, contacts } = await request.json();;
    return json({
        message: 'success'
    }, {
        status: 200
    })
    // return {
    //     status: 500,
    //     body: {
    //         message: 'error text'
    //     }
    // }
    // const admin = process.env['ADMIN_EMAIL'];
    // // Message to admin
    // try {
    // 	const msg = await mg.messages.create(process.env['MAILGUN_DOMAIN'], {
    // 		from: 'Newfolk.com.ua <mg@skystudio.uz.ua>',
    // 		to: [ admin ],
    // 		subject: 'Контактна форма з skystudio.uz.ua',
    // 		template: 'contactform',
    // 		// html: '<strong>some</strong>',
    // 		// text: 'some'
    // 		'h:X-Mailgun-Variables': JSON.stringify({ name, contacts, message, admin })
    // 	});
    // 	// console.log(msg);
    // } catch (err) {
    // 	console.log(err);
    // 	return {
    // 		status: 500,
    // 		body: {
    // 			message: JSON.stringify(err)
    // 		}
    // 	};
    // }
    // return {
    // 	status: 200,
    // 	body: {
    // 		message: 'success'
    // 	}
    // };
}