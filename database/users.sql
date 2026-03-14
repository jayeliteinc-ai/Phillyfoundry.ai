create table if not exists users (
  id uuid primary key,
  email text not null unique,
  created_at timestamp default now()
);
