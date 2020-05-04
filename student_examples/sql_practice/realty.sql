-- Week 19, Day 1 - Student Labs

CREATE DATABASE realty_db;

-- Table Schemas

CREATE TABLE apartments 
(
    id serial,
    apartment_number int,
    bedrooms int,
    bathrooms int,
    address varchar(255),
    tenant varchar(255),
    occupied boolean,
    sq_ft int,
    price int
);

CREATE TABLE office
(
    id serial,
    office_number int,
    floors int,
    sq_ft int,
    cubicles int,
    bathrooms int,
    address varchar(255),
    company varchar(255),
    occupied boolean,
    price int
);

CREATE TABLE storefront 
(
    address varchar(255),
    occupied boolean,
    price int,
    kitchen boolean,
    sq_ft int,
    owner varchar(255),
    outdoor_seating boolean
)

