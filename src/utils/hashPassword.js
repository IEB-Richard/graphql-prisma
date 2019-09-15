import bcrypt from 'bcryptjs'
const hashPassword = (password) => {
  if (password.length < 8) {
    throw new Error("Password must be 8 characters or longer.")
  }
  return bcrypt.hash(password, bcrypt.genSaltSync(10))
}

export default hashPassword