module.exports ={
    port: process.env.PORT || 8082,
    db: {
        user: process.env.DB_USER || 'ACC',
        password: process.env.DB_PASS || 'password',
        database: process.env.DB_NAME || 'ShopTemplate',
        host:  '127.0.0.1' || 'http://138.68.5.128',
        dialect: 'sqlite',
        storage: './ShopMenu.sqlite'
    }
};