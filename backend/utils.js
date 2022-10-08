import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
  // no pasamos password porque no queremos que sea parte del token
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
}

export default generateToken;