-- Create a sample table
CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    age INTEGER
);

-- Insert some sample data into the table
INSERT INTO users (username, email, age) VALUES
    ('john_doe', 'john.doe@example.com', 25),
    ('jane_smith', 'jane.smith@example.com', 30);