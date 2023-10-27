import { test, expect } from 'bun:test';
import { mock, router } from '@stricjs/router';
import api from '../src/api';

const client = mock(router(api));

test('Log in and get data', async () => {
    const token = await client.text('/api/login', {
        method: 'POST',
        body: {
            username: 'admin',
            password: 'MindX@2022'
        }
    }), opts = {
        headers: { Authorization: token }
    };

    // Get products
    let items = await client.json('/api/get/products', opts);
    console.log(items);
    expect(typeof items).toBe('object');

    // Get orders
    items = await client.json('/api/get/orders', opts);
    console.log(items);
    expect(typeof items).toBe('object');
});
