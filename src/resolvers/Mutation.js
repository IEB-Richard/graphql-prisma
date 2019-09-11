import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const Mutation = {
	async createUser(parent, args, { prisma }, info) {
		if (args.data.password.length < 8) {
			throw new Error("Password must be 8 characters or longer.")
		}

		const password = await bcrypt.hash(args.data.password, bcrypt.genSaltSync(10))
		console.log(password)

		const user = await prisma.mutation.createUser({
			data: {
				...args.data,
				password
			}
		});

		return {
			user,
			token: jwt.sign({ userId: user.id }, 'thisisasecret')
		}
	},
	deleteUser(parent, args, { prisma }, info) {
		return prisma.mutation.deleteUser({ where: { id: args.id } }, info);
	},
	updateUser(parent, args, { prisma }, info) {
		return prisma.mutation.updateUser(
			{
				where: { id: args.id },
				data: args.data
			},
			info
		);
	},
	createPost(parent, args, { prisma }, info) {
		return prisma.mutation.createPost(
			{
				data: {
					title: args.data.title,
					body: args.data.body,
					published: args.data.published,
					author: {
						connect: {
							id: args.data.author
						}
					}
				}
			},
			info
		);
	},
	deletePost(parent, args, { prisma }, info) {
		return prisma.mutation.deletePost(
			{
				where: {
					id: args.id
				}
			},
			info
		);
	},
	updatePost(parent, args, { prisma }, info) {
		return prisma.mutation.updatePost(
			{
				where: {
					id: args.id
				},
				data: args.data
			},
			info
		);
	},
	createComment(parent, args, { prisma }, info) {
		return prisma.mutation.createComment(
			{
				data: {
					text: args.data.text,
					author: {
						connect: { id: args.data.author }
					},
					post: {
						connect: { id: args.data.post }
					}
				}
			},
			info
		);
	},
	deleteComment(parent, args, { prisma }, info) {
		return prisma.mutation.deleteComment({
			where: {
				id: args.id
			}
		}, info)
	},
	updateComment(parent, args, { db, pubsub }, info) {
		return prisma.mutation.updateComment({
			where: {
				id: args.id
			},
			data: args.data
		}, info)
	}
};

export default Mutation;
