-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it

DROP TABLE televisions;
-- Create a televisions table

CREATE TABLE televisions ( id serial, model_name varchar(20), screen_size decimal, resolution varchar(20), price decimal, release_date timestamp, photo_url varchar(255));
--  The table should have id, model_name, screen_size, resolution,
--  price, release_date, photo_url


-- Insert 4 televisions into the tv_models table
INSERT INTO televisions ( model_name, screen_size, resolution, price)
VALUES 
( 'LG', 56, '1080p', 200),
('Sylvania', 23, '1000p', 100),
('Sony', 65, '1080p', 500),
('Sony', 35, '1080p', 250);



-- Select all entries from the tv_models table
SELECT * from televisions;

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the tv_models, removing the resolution column
--  and add vertical_resolution and horizontal_resolution columns