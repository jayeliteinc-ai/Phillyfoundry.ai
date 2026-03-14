create table if not exists usage (
  id uuid primary key,
  user_id uuid references users(id),
  tool_name text not null,
  created_at timestamp default now()
);
