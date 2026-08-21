"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Loader2,
  Mail,
  ShieldCheck,
} from "lucide-react";

const fields = [
  {
    name: "fullName",
    label: "Full name",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "Your age",
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "Your phone number",
    required: true,
  },
  {
    name: "location",
    label: "City / Country",
    type: "text",
    placeholder: "e.g. Lahore, Pakistan",
    required: true,
  },
  {
    name: "concern",
    label: "Main concern",
    type: "text",
    placeholder: "Briefly describe your main concern",
    required: true,
  },
];

export default function ConsultationRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitted(false);
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: String(formData.get("fullName") || "").trim(),
      age: String(formData.get("age") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      concern: String(formData.get("concern") || "").trim(),
      background: String(formData.get("background") || "").trim(),
    };

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your request."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      console.error(submitError);

      setError(
        "We could not send your consultation request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="request"
      className="bg-[#f7f6f2] py-24 text-[var(--text-dark)] md:py-28"
    >
      <div className="site-container">
        {/* Heading */}
        <div className="max-w-[760px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--gold)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b7746]">
              Consultation Request
            </span>
          </div>

          <h2 className="mt-6 max-w-[700px] font-serif text-[clamp(38px,4.5vw,58px)] leading-[1.05] tracking-[-0.025em] text-[#111a2c]">
            Begin with a consultation request.
          </h2>

          <p className="mt-6 max-w-[670px] text-[15px] leading-8 text-[#626b7b]">
            Please provide the information needed for an initial review.
            This form is intended for a consultation request and is not a
            full medical history.
          </p>
        </div>

        {/* Main layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.32fr]">
          {/* Form */}
          <div className="border border-[#dddcd7] bg-white p-7 md:p-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >
              {/* Basic information */}
              <div>
                <div className="mb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b7746]">
                    Basic Information
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {fields.map((field) => (
                    <label
                      key={field.name}
                      htmlFor={field.name}
                      className="block"
                    >
                      <span className="mb-2 block text-[12px] font-medium text-[#30394b]">
                        {field.label}

                        {field.required && (
                          <span className="ml-1 text-[#9a7f42]">
                            *
                          </span>
                        )}
                      </span>

                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="h-12 w-full border border-[#d9dce2] bg-[#fcfcfb] px-4 text-[13px] text-[#172036] outline-none transition-colors placeholder:text-[#a0a6b1] focus:border-[#b69d63]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Background */}
              <div>
                <label
                  htmlFor="background"
                  className="block"
                >
                  <span className="mb-2 block text-[12px] font-medium text-[#30394b]">
                    Brief background
                  </span>

                  <textarea
                    id="background"
                    name="background"
                    rows={5}
                    placeholder="Please share only the basic information relevant to your initial request."
                    className="w-full resize-y border border-[#d9dce2] bg-[#fcfcfb] px-4 py-3 text-[13px] leading-6 text-[#172036] outline-none transition-colors placeholder:text-[#a0a6b1] focus:border-[#b69d63]"
                  />
                </label>
              </div>

              {/* Confirmations */}
              <div className="border-t border-[#e7e6e1] pt-6">
                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="policyAccepted"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-[#8b7746]"
                    />

                    <span className="text-[12px] leading-6 text-[#626b7b]">
                      I have read the consultation policy and understand
                      that the initial case assessment fee is{" "}
                      <strong className="font-semibold text-[#273149]">
                        PKR 50,000
                      </strong>
                      , payable in advance as part of the consultation
                      process.
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="requestAcknowledged"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-[#8b7746]"
                    />

                    <span className="text-[12px] leading-6 text-[#626b7b]">
                      I understand that submitting this form is a
                      consultation request and does not itself confirm an
                      appointment or acceptance of my case.
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="informationConsent"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-[#8b7746]"
                    />

                    <span className="text-[12px] leading-6 text-[#626b7b]">
                      I confirm that the information I have provided is
                      accurate to the best of my knowledge and is limited to
                      what is necessary for this initial request.
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="border-t border-[#e7e6e1] pt-7">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[9px] border border-[#c9b47a] bg-[#c9b47a] px-7 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#071127] shadow-[0_8px_24px_rgba(93,78,39,0.12)] transition-all duration-200 hover:bg-[#dfd2aa] hover:shadow-[0_10px_28px_rgba(93,78,39,0.16)] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        size={16}
                        strokeWidth={1.6}
                        className="animate-spin"
                      />

                      Sending Request...
                    </>
                  ) : (
                    <>
                      Submit Consultation Request

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      />
                    </>
                  )}
                </button>

                {/* Success message */}
                {submitted && (
                  <div className="mt-5 border border-[#d8dfca] bg-[#f5f7ef] px-5 py-4">
                    <div className="flex items-start gap-3">
                      <Check
                        size={17}
                        strokeWidth={1.6}
                        className="mt-0.5 shrink-0 text-[#657544]"
                      />

                      <div>
                        <p className="text-[13px] font-semibold text-[#4f5e3c]">
                          Request received.
                        </p>

                        <p className="mt-1 text-[12px] leading-6 text-[#5f694e]">
                          Your consultation request has been sent to the
                          clinic for review. The clinic will communicate the
                          next step through the professional contact details
                          you provided.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <div className="mt-5 border border-[#e2caca] bg-[#fbf4f4] px-5 py-4">
                    <p className="text-[12px] leading-6 text-[#8b4d4d]">
                      {error}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Side information */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[#d9d0b9] bg-[#f8f5eb] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ded5bd] bg-[#fbf9f2]">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.4}
                  className="text-[#8b7746]"
                />
              </div>

              <h3 className="mt-6 font-serif text-[28px] leading-tight text-[#162039]">
                A private consultation request.
              </h3>

              <p className="mt-4 text-[13px] leading-7 text-[#626b7b]">
                This form is intended for an initial consultation request.
                Please provide only the information needed for the clinic to
                review your request.
              </p>

              <div className="mt-7 border-t border-[#ddd5c0] pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b7746]">
                  Professional Email
                </p>

                <a
                  href="mailto:info@babaalihomeopathicclinic.com"
                  className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium text-[#273149] transition-colors hover:text-[#7d6938]"
                >
                  <Mail size={15} strokeWidth={1.5} />
                  info@babaalihomeopathicclinic.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}