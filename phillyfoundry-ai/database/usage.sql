create table if not exists usage (
  id uuid primary key,
  user_id uuid references users(id),
  module text not null,
  tokens_used integer default 0,
  created_at timestamp default now()
);
