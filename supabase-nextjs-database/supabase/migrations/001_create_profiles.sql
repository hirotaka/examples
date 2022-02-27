-- publicにprofilesテーブルを作成
create table profiles (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  name text,

  primary key (id)
);
