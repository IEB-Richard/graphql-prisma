import { getFirstName, isValidPassword } from '../src/utils/user'

test('Should return first name when given full name', () => {
  const firstName = getFirstName("John Doe")
  expect(firstName).toBe('John')
})

test('Should return firstName when given first name', () => {
  const firstName = getFirstName("John")
  expect(firstName).toBe("John")
})

test('Should reject password shorter than 8 characters', () => {
  const isValid = isValidPassword("abc123")
  expect(isValid).toBe(false)
})

test('Should reject password that contains word "password"', () => {
  const isValid = isValidPassword("abcPassword1234")
  expect(isValid).toBe(false)
})

test('should correctly validate a valid password', ()=>{
  const isValid = isValidPassword('Test1234*sda')
  expect(isValid).toBe(true)
})