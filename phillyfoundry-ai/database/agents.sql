create table if not exists agents (
  id uuid primary key,
  user_id uuid references users(id),
  name text not null,
  status text default 'active'
);
