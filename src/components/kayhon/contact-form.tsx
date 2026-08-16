"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Upload, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const furnitureTypes = [
  "Кухня",
  "Шкаф / гардеробная",
  "Спальня",
  "Гостиная",
  "Диван / мягкая мебель",
  "Прихожая",
  "Другое",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Не удалось отправить заявку");
      }
      setStatus("success");
      form.reset();
      setFileName("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Произошла ошибка");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-wood/40 bg-secondary/40 p-10 sm:p-14 text-center"
      >
        <div className="mx-auto mb-6 size-16 rounded-full bg-wood/15 flex items-center justify-center">
          <Check className="size-7 text-wood" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-light mb-3">
          Спасибо!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs uppercase tracking-luxe text-wood hover:text-foreground transition-colors"
        >
          Отправить ещё одну заявку
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Имя" htmlFor="name">
          <Input
            id="name"
            name="name"
            required
            placeholder="Как к вам обращаться"
            className="h-12 bg-background border-border focus-visible:border-wood"
          />
        </Field>
        <Field label="Телефон" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+992 __ ___ __ __"
            className="h-12 bg-background border-border focus-visible:border-wood"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Тип мебели" htmlFor="type">
          <select
            id="type"
            name="type"
            className="h-12 w-full bg-background border border-border px-3 text-sm focus:border-wood focus:outline-none transition-colors"
            defaultValue=""
          >
            <option value="" disabled>
              Выберите тип
            </option>
            {furnitureTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Размеры (необязательно)" htmlFor="dimensions">
          <Input
            id="dimensions"
            name="dimensions"
            placeholder="Напр.: 3,2 × 2,4 м"
            className="h-12 bg-background border-border focus-visible:border-wood"
          />
        </Field>
      </div>

      <Field label="Комментарий" htmlFor="comment">
        <Textarea
          id="comment"
          name="comment"
          rows={5}
          placeholder="Опишите, какую мебель вы хотите, или приложите детали помещения"
          className="bg-background border-border focus-visible:border-wood resize-none"
        />
      </Field>

      <Field label="Загрузка фотографии (необязательно)" htmlFor="photo">
        <div className="relative">
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            className="sr-only"
          />
          <label
            htmlFor="photo"
            className="flex items-center justify-between gap-3 h-12 px-4 border border-border bg-background cursor-pointer hover:border-foreground/40 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Upload className="size-4" strokeWidth={1.5} />
              {fileName || "Выберите файл"}
            </span>
            {fileName && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setFileName("");
                  const input = document.getElementById("photo") as HTMLInputElement;
                  if (input) input.value = "";
                }}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Удалить файл"
              >
                <X className="size-4" strokeWidth={1.5} />
              </button>
            )}
          </label>
        </div>
      </Field>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-destructive bg-destructive/10 border border-destructive/30 px-4 py-3"
        >
          {errorMessage}
        </motion.div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted-foreground max-w-md">
          Нажимая «Отправить заявку», вы соглашаетесь на обработку ваших
          контактных данных для связи по проекту.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-luxe font-medium hover:bg-wood-dark transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed min-w-[220px]"
          )}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" strokeWidth={1.5} />
              Отправляем...
            </>
          ) : (
            "Отправить заявку"
          )}
        </button>
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-wood bg-wood/10 border border-wood/30 px-4 py-3"
          >
            Спасибо! Ваша заявка отправлена. Мы свяжемся с вами.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-xs uppercase tracking-luxe text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
