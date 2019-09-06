import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
	typeDefs: 'src/generated/prisma.graphql',
	endpoint: 'http://localhost:4466'
});

prisma.query.users(null, '{ id name email }').then((data) => {
	console.log(JSON.stringify(data, undefined, 2));
});

prisma.query.comments(null, '{ id text author { id name }}').then((data) => {
	console.log(JSON.stringify(data, undefined, 2));
});

prisma.mutation
	.createPost(
		{
			data: {
				title: 'My new GraphQL post is live!',
				body: 'you can find the new course here',
				published: true,
				author: {
					connect: {
						id: 'ck07h3dv0009j08019vemlioz'
					}
				}
			}
		},
		'{ id title body published }'
	)
	.then((data) => {
		console.log(JSON.stringify(data, undefined, 2));
	});
