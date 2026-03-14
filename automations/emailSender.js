export async function emailSender({ to, subject }) {
  return { status: "sent", to, subject };
}
