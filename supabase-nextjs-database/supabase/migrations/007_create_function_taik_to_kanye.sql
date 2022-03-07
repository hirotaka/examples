create or replace function talk_to_kanye(name text)
  returns text
  language plpgsql
as $$
  declare
  kayne_quote text;
begin
  select content::json->>'quote'
    into kayne_quote
    from http_get('https://api.kanye.rest/');

  return concat('Hey ', name, '. ', kayne_quote);
end;
$$;
