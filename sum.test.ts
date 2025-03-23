import {sum} from './sum';
import request from 'supertest';
import app from './server';

describe('Sum Function', () => {
    test('should return the correct sum of two numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('should return a negative sum when given negative numbers', () => {
        expect(sum(-2, -3)).toBe(-5);
    });
});

describe('Basic API Tests', () => {
    test('GET /ping should return pong', async () => {
        const response = await request(app).get('/ping');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('pong');
    });
});
