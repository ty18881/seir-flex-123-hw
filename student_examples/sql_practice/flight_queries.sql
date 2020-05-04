-- all airports in NY

select name, city, iata_faa from airports where city ='New York';

-- all Paris airports

select name, city, iata_faa from airports where city ='Paris';

-- how many routes originate from NY = NY area airport

select count(*) from routes where origin_code in (select iata_faa from airports where city ='New York');
-- 614
-- alternate select count(*) from routes JOIN airports ON routes.origin_id = airports.id where airports.city = 'New York';
select count(*) from routes where origin_code in (select iata_faa from airports where city ='Paris');

-- 725

-- how many routes originate in NY and land in Paris


