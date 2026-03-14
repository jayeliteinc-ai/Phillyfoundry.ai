create table if not exists agents (
  id uuid primary key,
  name text not null,
  owner_id uuid references users(id)
);
