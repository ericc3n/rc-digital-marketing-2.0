import { NextResponse } from "next/server";
import { Message } from "../../../../lib/server/models/models";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Metodo invalido"}, { status: 405 });
  }
  try {
    const data = await req.json()
    const message: Message = new Message(
      data.email.value,
      data.name.value,
      data.message.value,
    )
    await message.send()
    return NextResponse.json({ message: "Email inviata con successo"}, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Errore nell'invio dell'email" }, { status: 500});
  }
}