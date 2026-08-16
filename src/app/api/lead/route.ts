import { NextRequest, NextResponse } from "next/server";

/**
 * Приём заявок с формы «Мебель на заказ».
 *
 * В этой демо-реализации заявки просто логируются на сервере.
 * В продакшене здесь должна быть интеграция с CRM / e-mail / Telegram-ботом
 * компании KAYHON MEBEL.
 */
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") ?? "";

    let name = "";
    let phone = "";
    let type = "";
    let dimensions = "";
    let comment = "";
    let photoName: string | null = null;

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      name = String(form.get("name") ?? "").trim();
      phone = String(form.get("phone") ?? "").trim();
      type = String(form.get("type") ?? "").trim();
      dimensions = String(form.get("dimensions") ?? "").trim();
      comment = String(form.get("comment") ?? "").trim();
      const photo = form.get("photo");
      if (photo instanceof File && photo.size > 0) {
        photoName = photo.name;
      }
    } else {
      const body = await req.json().catch(() => ({}));
      name = String(body.name ?? "").trim();
      phone = String(body.phone ?? "").trim();
      type = String(body.type ?? "").trim();
      dimensions = String(body.dimensions ?? "").trim();
      comment = String(body.comment ?? "").trim();
    }

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Имя и телефон обязательны для заполнения." },
        { status: 400 }
      );
    }

    // Здесь только логируем. Замените на реальную отправку в CRM/email.
    console.log("[KAYHON MEBEL] Новая заявка:", {
      name,
      phone,
      type,
      dimensions,
      comment,
      photo: photoName,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] error", err);
    return NextResponse.json(
      { ok: false, error: "Не удалось обработать заявку. Попробуйте позже." },
      { status: 500 }
    );
  }
}
