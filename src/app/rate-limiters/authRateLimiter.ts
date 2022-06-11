import rateLimit from 'express-rate-limit';

export const loginRateLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 min
    max: 6,
    message: 'You have exceeded the 6 requests in 1 min limit!',
    headers: true,
});

export const registerRateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    message:
        'Too many accounts created from this IP, please try again after an hour',
    headers: true,
});