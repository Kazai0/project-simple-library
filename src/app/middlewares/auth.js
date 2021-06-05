import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import 'dotenv/config';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({
      message: 'header not found 403',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: 'authorization not ok',
    });
  }
};
