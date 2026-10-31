"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Service } from "@/types/portfolio";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const hasThumbnail = Boolean(service.thumbnail);

  const galleryImages = service.gallery?.filter(Boolean) ?? [];

  const modalImages =
    galleryImages.length > 0
      ? galleryImages
      : service.thumbnail
        ? [service.thumbnail]
        : [];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (modalImages.length > 1 && event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % modalImages.length);
      }

      if (modalImages.length > 1 && event.key === "ArrowLeft") {
        setActiveImage(
          (current) => (current - 1 + modalImages.length) % modalImages.length,
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, modalImages.length]);

  function closeModal() {
    setIsOpen(false);
  }

  function showPreviousImage() {
    setActiveImage(
      (current) => (current - 1 + modalImages.length) % modalImages.length,
    );
  }

  function showNextImage() {
    setActiveImage((current) => (current + 1) % modalImages.length);
  }

  const cardContent = (
    <>
      {service.thumbnail && (
        <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
          <Image
            src={service.thumbnail}
            alt={`${service.title} thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono text-sm text-[var(--accent)]">
          {String(index + 1).padStart(2, "0")}
        </span>

        {hasThumbnail && (
          <span
            aria-hidden="true"
            className="text-xl text-[var(--muted)] transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
          >
            ↗
          </span>
        )}
      </div>

      <h3 className="text-xl font-medium tracking-tight text-[var(--foreground)]">
        {service.title}
      </h3>

      <p className="mt-3 leading-7 text-[var(--foreground)] opacity-85">
        {service.overview}
      </p>

      {!hasThumbnail && (
        <>
          {service.description && (
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {service.description}
            </p>
          )}

          {service.details && (
            <p className="mt-3 text-sm leading-7 text-[var(--subtle)]">
              {service.details}
            </p>
          )}

          {service.technologies.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </>
      )}

      {hasThumbnail && (
        <span className="mt-5 text-sm font-medium text-[var(--accent)]">
          View details <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  return (
    <>
      {hasThumbnail ? (
        <button
          type="button"
          onClick={() => {
            setActiveImage(0);
            setIsOpen(true);
          }}
          aria-haspopup="dialog"
          className="surface-card group flex h-full w-full flex-col rounded-2xl p-6 text-left transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 sm:p-7"
        >
          {cardContent}
        </button>
      ) : (
        <article className="surface-card flex h-full flex-col rounded-2xl p-6 sm:p-7">
          {cardContent}
        </article>
      )}

      {isOpen && hasThumbnail && modalImages.length > 0 && (
        <div
          className="service-modal-overlay fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-2"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={`service-title-${service.id}`}
            className="surface-modal relative my-auto max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close service details"
              className="service-modal-icon-button absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full text-xl transition"
            >
              <span aria-hidden="true">×</span>
            </button>

            <p className="eyebrow mb-3 pr-12">
              Service {String(index + 1).padStart(2, "0")}
            </p>

            <h2
              id={`service-title-${service.id}`}
              className="pr-10 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
            >
              {service.title}
            </h2>

            <p className="mt-3 leading-7 text-[var(--muted)]">
              {service.overview}
            </p>

            <div className="mt-7">
              <div className="service-modal-gallery relative aspect-video overflow-hidden rounded-xl">
                <Image
                  key={modalImages[activeImage]}
                  src={modalImages[activeImage]}
                  alt={`${service.title} gallery image ${activeImage + 1}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                />

                {modalImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label="Previous gallery image"
                      className="service-modal-icon-button absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-2xl transition"
                    >
                      <span aria-hidden="true">‹</span>
                    </button>

                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label="Next gallery image"
                      className="service-modal-icon-button absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-2xl transition"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-[var(--muted)]">
                <span>Gallery</span>
                <span>
                  {activeImage + 1} / {modalImages.length}
                </span>
              </div>
            </div>

            {service.description && (
              <p className="mt-7 leading-7 text-[var(--foreground)] opacity-85">
                {service.description}
              </p>
            )}

            {service.details && (
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {service.details}
              </p>
            )}

            {service.technologies.length > 0 && (
              <div className="mt-7">
                <h3 className="mb-3 text-sm font-medium text-[var(--foreground)]">
                  Technologies and tools
                </h3>

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
