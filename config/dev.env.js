const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	COMPANY_ID: `'${process.env.COMPANY_ID}'`,
	COUNTRY: `'${process.env.COUNTRY}'`,
	FORM_FROM: `'${process.env.FORM_FROM}'`,
	FORM_MESSAGE: `'${process.env.FORM_MESSAGE}'`,
	FORM_TO: `'${process.env.FORM_TO}'`,
	FORM_URL: `'${process.env.FORM_URL}'`,
	LINK_FACEBOOK: `'${process.env.LINK_FACEBOOK}'`,
	LINK_WSSP: `'${process.env.LINK_WSSP}'`,
	LINK_GOOGLE_PLAY: `'${process.env.LINK_GOOGLE_PLAY}'`,
	LINK_APP_STORE: `'${process.env.LINK_APP_STORE}'`,
	LINK_INSTAGRAM: `'${process.env.LINK_INSTAGRAM}'`,
	SHEET_ID: `'${process.env.SHEET_ID}'`,
	TEMPLATE_CODE: `'${process.env.TEMPLATE_CODE}'`,
	TEMPLATE_WSP: `'${process.env.TEMPLATE_WSP}'`,
	URL_PER: `'${process.env.URL_PER}'`,
	URL_SALES: `'${process.env.URL_SALES}'`,
	CONTACT_FIRST: `'${process.env.CONTACT_FIRST}'`,
	CONTACT_SECOND: `'${process.env.CONTACT_SECOND}'`,
	NUMBER_COUPON: `'${process.env.NUMBER_COUPON}'`,
	PHONE_COMPANY: `'${process.env.PHONE_COMPANY}'`,
	WSP_APP_COM: `'${process.env.WSP_APP_COM}'`,
	WSP_APP_CLIENT: `'${process.env.WSP_APP_CLIENT}'`,
	PRICE_REGISTER: `'${process.env.PRICE_REGISTER}'`,
	WHATSAPP_NUMBER:`'${process.env.WHATSAPP_NUMBER}'`,
	TEMPLATE_CONFIRM: `'${process.env.TEMPLATE_CONFIRM}'`,
});

