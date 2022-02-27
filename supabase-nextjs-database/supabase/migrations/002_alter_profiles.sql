alter table profiles enable row level security;

create policy "パブリックなプロフィールはだれでも参照（select）できる。"
  on profiles for select
  using ( true );

create policy "自身のプロフィールを更新（update）できる。"
  on profiles for update
  using ( auth.uid() = id );

create policy "自身のプロフィールを追加（insert）できる。"
  on profiles for insert
  with check ( auth.uid() = id );
