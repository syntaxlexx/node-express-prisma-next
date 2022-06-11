import rateLimit from 'express-rate-limit';

export const apiRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 120,
  message: 'You have exceeded the 120 requests in 1 min limit!', 
  headers: true,
});