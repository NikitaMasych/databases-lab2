CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    wallet_balance DECIMAL(18, 2)
);

CREATE TABLE assets (
    asset_id SERIAL PRIMARY KEY,
    asset_name VARCHAR(255),
    symbol VARCHAR(10)
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    asset_id INT REFERENCES assets(asset_id),
    order_type VARCHAR(4),
    quantity DECIMAL(18, 8),
    price DECIMAL(18, 2),
    status VARCHAR(20),
    timestamp TIMESTAMP
);