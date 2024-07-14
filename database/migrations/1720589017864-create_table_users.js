const { MigrationInterface, QueryRunner } = require('typeorm');

module.exports = class CreateTableUsers1720589017864 {
  async up(queryRunner) {
    await queryRunner.query(`
            CREATE TABLE users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                first_name VARCHAR(255) NOT NULL,
                last_name VARCHAR(255) NOT NULL,
                birth_date TIMESTAMP NOT NULL,
                subscription ENUM('admin', 'free', 'basic', 'premium') DEFAULT 'free',
                biography TEXT,
                ddd VARCHAR(2) NOT NULL,
                phone VARCHAR(255) NOT NULL UNIQUE,
                avatar VARCHAR(255),
                subscription_expires_at TIMESTAMP,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                deleted_at TIMESTAMP NULL
            );
        `);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE users;`);
  }
};
