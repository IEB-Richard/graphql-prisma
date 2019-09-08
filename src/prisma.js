import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
	typeDefs: 'src/generated/prisma.graphql',
	endpoint: 'http://localhost:4466'
});

export default prisma

// prisma.query.users(null, '{ id name email }').then((data) => {
// 	console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.query.comments(null, '{ id text author { id name }}').then((data) => {
// 	console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation
// 	.createPost(
// 		{
// 			data: {
// 				title: 'My new GraphQL post is live!',
// 				body: 'you can find the new course here',
// 				published: true,
// 				author: {
// 					connect: {
// 						id: 'ck07h3dv0009j08019vemlioz'
// 					}
// 				}
// 			}
// 		},
// 		'{ id title body published }'
// 	)
// 	.then((data) => {
// 		console.log(JSON.stringify(data, undefined, 2));
// 	});

// prisma.exists.Comment({
// 	id: "ck07hu2og00m10801il7jkwx2",
// 	author: {
// 		id: "ck07h3dv0009j08019vemlioz"
// 	}
// }).then((exists) => {
// 	console.log(exists)
// })

// const createPostForUser = async (authorId, data) => {
// 	const userExists = await prisma.exists.User({
// 		id: authorId
// 	})

// 	if (!userExists) {
// 		throw new Error('No user exists')
// 	}

// 	const post = await prisma.mutation.createPost({
// 		data: {
// 			...data,
// 			author: {
// 				connect: {
// 					id: authorId
// 				}
// 			}
// 		}
// 	}, '{ author { id name email posts { id title published body }} }');

// 	// const user = await prisma.query.user({
// 	// 	where: {
// 	// 		id: authorId
// 	// 	}
// 	// }, '{ id name posts { id title published }}');
// 	// return user;
// 	return post.author

// };

// createPostForUser("ck07h3dv0009j08019vemlioz", {
// 	title: "Creat books to read",
// 	body: "The War of Art",
// 	published: true
// }).then(user => {
// 	console.log(JSON.stringify(user, undefined, 2));
// }).catch(error => {
// 	console.log(error.message)
// })

// const updatePostForUser = async (postId, data) => {

// 	const postExists = await prisma.exists.Post({
// 		id: postId
// 	})

// 	if (!post) {
// 		throw new Error('Post not found')
// 	}
// 	const post = await prisma.mutation.updatePost({
// 		where: {
// 			id: postId
// 		},
// 		data
// 	}, '{ author { id name email posts{ id title body }} }')
// 	return post.author
// }

// updatePostForUser("12345", { published: false }).then((user) => {
// 	console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
// 	console.log(error.message)
// })