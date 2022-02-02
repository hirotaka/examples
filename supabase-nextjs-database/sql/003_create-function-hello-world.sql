create or replace function hello_world()
  returns text
  language sql
as $$
  select 'Hello world, Supabase!';
$$;
