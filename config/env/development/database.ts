export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'netsoc-cms'),
			user: env('DATABASE_USERNAME', 'nsadmin'),
			password: env('DATABASE_PASSWORD', 'Belfield-4'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
