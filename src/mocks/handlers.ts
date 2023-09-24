import { rest } from 'msw';
import { users } from './data';

export const handlers = [
	rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(users)
		);
	}),
];

export const errorHandler = rest.get(
	'https://jsonplaceholder.typicode.com/users',
	(req, res, ctx) => {
		return res(ctx.status(500));
	}
);