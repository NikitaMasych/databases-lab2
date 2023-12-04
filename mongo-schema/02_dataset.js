const db = db.getSiblingDB('lab2');

// Insert 1000 users

const usersData = [];
for (let i = 1; i <= 1000; i++) {
    const user = {
        insertOne: {
            document: {
                username: 'user' + i + 'example.com',
                email: 'user' + i + '@example.com',
                passwordHash: 'hashed_password',
                walletBalance: Decimal128.fromString((Math.random() * 1000).toFixed(2)),
            }
        }
    };
    usersData.push(user);
}

const startUsersInsert = new Date();
db.users.bulkWrite(usersData);
const endUsersInsert = new Date();
const usersExecutionTime = endUsersInsert - startUsersInsert;
print(`Users insertion time: ${usersExecutionTime} ms`);


// Insert 1000 assets

const assetsData = [];
for (let i = 1; i <= 1000; i++) {
    const asset = {
        insertOne: {
            document: {
                assetName: 'asset' + i,
                symbol: 'SYM' + i,
            }
        }
    };
    assetsData.push(asset);
}

const startAssetsInsert = new Date();
db.assets.bulkWrite(assetsData);
const endAssetsInsert = new Date();
const assetsExecutionTime = endAssetsInsert - startAssetsInsert;
print(`Assets insertion time: ${assetsExecutionTime} ms`);


// Insert 1000 orders

const ordersData = [];
for (let i = 1; i <= 1000; i++) {
    const order = {
        userId: Math.floor(Math.random() * 1000) + 1,
        assetId: Math.floor(Math.random() * 1000) + 1,
        orderType: Math.random() < 0.33 ? 'BUY' : (Math.random() >= 0.33 && Math.random() < 0.66 ? 'SWAP' : 'SELL'),
        quantity: Decimal128.fromString((Math.random() * 10).toFixed(8)),
        price: Decimal128.fromString((Math.random() * 100).toFixed(2)),
        status: 'OPEN',
        timestamp: new Date()
    };

    ordersData.push(order);
}

const startOrdersInsert = new Date();
db.orders.insertMany(ordersData);
const endOrdersInsert = new Date();
const ordersExecutionTime = endOrdersInsert - startOrdersInsert;
print(`Orders insertion time: ${ordersExecutionTime} ms`);