create extension if not exists "uuid-ossp"

create table products (
    id uuid primary key default uuid_generate_v4(),
    title text not null,
    description text,
    price integer
)

create table stocks (
	product_id uuid unique,
	count integer,
	foreign key ("product_id") references "products" ("id")
)

insert into products (title, description, price) values
 ('Peace and War','Actions goes before the French invasion of Russia',2.4),
 ('451 fahrenheit','Utopia of the modern world',10),
 ('Beyond the good and evil','What is truth?The answer is beyond these things',23),
 ('Game of Thrones','Famous novell about kings and dragons',15),
 ('A princess of mars','Who can treat you as you come to Mars in your second life',23)

insert into stocks (product_id, count) values
  ('21ba2289-50bf-40a2-8028-372cc5d59384', 4),
  ('fc242f84-7e7c-4888-bb76-76a0310cf9e3', 6),
  ('8527b10c-6bc6-44c4-8487-05c5f0124836', 7),
  ('4cd8d0ea-e70b-42f4-a2d8-9422ea44aa33', 12),
  ('e2f43c3e-1810-4911-a025-15087c18a4d3', 7),

select * from products;
select * from stocks;

select products.*, stocks.count from products inner join stocks on products.id=stocks.product_id
