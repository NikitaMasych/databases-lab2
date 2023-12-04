-- Insert 1000 users
EXPLAIN ANALYZE
INSERT INTO users (username, email, password_hash, wallet_balance)
SELECT 'user'||i||'example.com', 'user'||i||'@example.com', 'hashed_password', random()*1000
FROM generate_series(1,1000) AS i;

-- Insert 1000 assets
EXPLAIN ANALYZE
INSERT INTO assets (asset_name, symbol)
SELECT CONCAT('asset', i), CONCAT('SYM', i)
FROM generate_series(1,1000) AS i;

-- Insert 1000 orders
EXPLAIN ANALYZE
INSERT INTO orders (user_id, asset_id, order_type, quantity, price, status, timestamp)
SELECT 
    floor(random()*1000)+1, 
    floor(random()*1000)+1, 
    CASE 
        WHEN random() < 0.33 THEN 'BUY'
        WHEN random() >= 0.33 AND random() < 0.66 THEN 'SWAP'
        ELSE 'SELL'
    END,
    random()*10, 
    random()*100, 
    'OPEN', 
    NOW()
FROM generate_series(1,1000);