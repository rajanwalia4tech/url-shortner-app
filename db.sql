create database urlshortner;
use urlshortner;

create table urls_info(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    short_url VARCHAR(255) DEFAULT NULL,
    long_url VARCHAR(1024) DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expiration_at DATETIME DEFAULT NULL
);