import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  X,
} from "lucide-react";

export function Contact() {
  const FORM_ENDPOINT =
    (import.meta as { env?: Record<string, string> }).env
      ?.VITE_FORM_ENDPOINT ||
    "https://formspree.io/f/your_form_id";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>(
    {},
  );
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim())
      nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nextErrors.email = "Enter a valid email.";
    }
    if (
      !formData.message.trim() ||
      formData.message.trim().length < 10
    ) {
      nextErrors.message =
        "Message should be at least 10 characters.";
    }
    return nextErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (formData.honeypot) return; // ignore likely bots

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFeedback("Thanks! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setFeedback("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      style={{ paddingTop: "85px" }}
      className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us
            a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    +91 9550616777
                  </p>
                  {/* <p className="text-gray-600">+91 XXXX-XXXXXX</p> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    support@akankshapublications.in
                  </p>
                  <p className="text-gray-600">
                    akankshapublications@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="text-amber-600"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">
                    Address
                  </h4>
                  <p className="text-gray-600">
                    D.NO. 48-16-38/3A
                    <br />
                    Seetha Rama Nagar Colony, Sree Ramachandra
                    Nagar
                    <br />
                    NTR District, Vijayawada, AP - 520008
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock
                    className="text-orange-600"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600">
                    Everyday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61585519104439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-amber-100 transition-colors shadow"
                  aria-label="Facebook"
                >
                  <Facebook
                    className="text-amber-600"
                    size={24}
                  />
                </a>
                <a
                  href="https://www.instagram.com/akankshapublications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-orange-100 transition-colors shadow"
                  aria-label="Instagram"
                >
                  <Instagram
                    className="text-orange-600"
                    size={24}
                  />
                </a>
                <a
                  href="https://x.com/AkankshaPbl6777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-amber-100 transition-colors shadow"
                  aria-label="X (formerly Twitter)"
                >
                  <X className="text-amber-600" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2"
                >
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2"
                >
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2"
                >
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2"
                >
                  Your Message to us
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-sm">
                  {feedback}
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}