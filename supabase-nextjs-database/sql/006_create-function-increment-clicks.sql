create or replace function increment_clicks()
  returns int8
  language plpgsql
as $$
  declare
  new_clicks int;
begin
  -- 現在のクリック数をselect
  select clicks
    from public.profiles
   where id = auth.uid();
  -- クリック数をインクリメント
  new_clicks = new_clicks + 1;
  -- クリック数を更新
  update public.prifiles
     set clicks = new_clicks
   where id = auth.uid();
  -- インクリメントした数を返す
  return new_clicks;
end;
$$;
