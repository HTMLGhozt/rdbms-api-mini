// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/zoodb.db',
    },
    migrations: {
      tableName: 'migrations',
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'zoodb',
      user: 'root',
      password: 'root',
    },
    migrations: {
      tableName: 'migrations',
    },
  },
};
