import React, { useState, useEffect } from "react";
import Section from "../Section";

const API_URL = import.meta.env.VITE_API_URL;

function Section1({ data }) {
  const [location, setLocations] = useState([]);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState({
    message: "",
    isSuccess: false,
  });
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);

  // Form character limits
  const CHAR_LIMITS = {
    name: 50,
    phone: 20,
    email: 100,
    message: 500,
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchClusters = async () => {
      try {
        const response = await fetch(`${API_URL}/api/cluster`);
        if (!response.ok) {
          throw new Error("Failed to fetch clusters");
        }
        const data = await response.json();

        const mappedLocation = data.map((cluster) => ({
          title: cluster.title,
          link_location: cluster.link_location,
        }));

        setLocations(mappedLocation);
      } catch (error) {
        console.error("Error fetching clusters:", error);
      }
    };

    fetchClusters();
  }, []);

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  // Reset submission count after 1 day
  useEffect(() => {
    const resetTimer = setInterval(() => {
      setSubmissionCount(0);
    }, 86400000); // 1 day in milliseconds

    return () => clearInterval(resetTimer);
  }, []);

  const handlePrev = () => {
    setCurrentLocationIndex((prevIndex) =>
      prevIndex === 0 ? location.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentLocationIndex((prevIndex) =>
      prevIndex === location.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isValidMapUrl = (url) => {
    return (
      typeof url === "string" &&
      url.startsWith("https://www.google.com/maps") &&
      url.includes("embed")
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check character limit
    if (value.length > CHAR_LIMITS[name]) {
      setFormErrors({
        ...formErrors,
        [name]: `Maksimal ${CHAR_LIMITS[name]} karakter`,
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon harus diisi";
      isValid = false;
    } else if (!/^[0-9+\- ]+$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Pesan harus diisi";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Rate limiting - max 5 submissions per hour
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (submissionCount >= 2 && now - lastSubmissionTime < oneDay) {
      setNotificationContent({
        message: "Terlalu banyak pesan dikirim. Silakan coba lagi nanti.",
        isSuccess: false,
      });
      setShowNotification(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotificationContent({
          message: "Pesan Berhasil Dikirim!",
          isSuccess: true,
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setLastSubmissionTime(Date.now());
        setSubmissionCount((prev) => prev + 1);
      } else {
        setNotificationContent({
          message: "Pesan Gagal Dikirim!",
          isSuccess: false,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setNotificationContent({
        message: "Terjadi kesalahan. Silakan coba lagi.",
        isSuccess: false,
      });
    } finally {
      setIsSubmitting(false);
      setShowNotification(true);
    }
  };

  if (location.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-500">Memuat lokasi...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 mx-10 relative">
      <Section title={data.title} />

      {/* Contact Info */}
      <p
        className="text-thin text-sm md:text-base text-center px-5 lg:px-10 xl:px-80 2xl:px-100"
        data-aos="fade-up"
      >
        {data.paragraph.split(/%%(.*?)%%/).map((part, index) =>
          index % 2 === 1 ? (
            <span key={index} className="font-semibold text-teal-600">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>

      {/* Container Form & Location */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:mt-10 w-full max-w-5xl lg:max-w-6xl">
        {/* Location Section */}
        <div className="flex flex-col w-full lg:w-1/2">
          {/* Google Maps */}
          <div
            className="mt-20 w-full h-[250px] md:h-[300px] rounded-lg shadow-2xl bg-gray-100 flex items-center justify-center"
            data-aos="fade-up"
          >
            {isValidMapUrl(location[currentLocationIndex]?.link_location) ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "10px" }}
                src={location[currentLocationIndex]?.link_location}
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center w-full h-full">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  Lokasi Tidak Tersedia
                </h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Kami sedang memperbarui peta lokasi untuk cluster ini
                </p>
              </div>
            )}
          </div>

          {/* Location Selector */}
          <div className="flex items-center justify-center w-full mt-5 space-x-2">
            <button
              onClick={handlePrev}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 sm:px-4 rounded-full transition-all"
            >
              &lt;
            </button>
            <h3 className="background-secondary-color text-center text-xs text-white font-semibold py-3 px-4 sm:px-6 sm:text-sm rounded-lg shadow-md">
              {location[currentLocationIndex]?.title}
            </h3>
            <button
              onClick={handleNext}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 sm:px-4 rounded-full transition-all"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col mt-10 w-full lg:w-1/2">
          <div className="mb-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Nama Lengkap"
              className={`border ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 w-full`}
              maxLength={CHAR_LIMITS.name}
              required
            />
            <div className="flex justify-between mt-1">
              {formErrors.name && (
                <span className="text-red-500 text-xs">{formErrors.name}</span>
              )}
              <span className="text-gray-500 text-xs ml-auto">
                {formData.name.length}/{CHAR_LIMITS.name}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Nomor Handphone"
              className={`border ${
                formErrors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 w-full`}
              maxLength={CHAR_LIMITS.phone}
              required
            />
            <div className="flex justify-between mt-1">
              {formErrors.phone && (
                <span className="text-red-500 text-xs">{formErrors.phone}</span>
              )}
              <span className="text-gray-500 text-xs ml-auto">
                {formData.phone.length}/{CHAR_LIMITS.phone}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className={`border ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 w-full`}
              maxLength={CHAR_LIMITS.email}
              required
            />
            <div className="flex justify-between mt-1">
              {formErrors.email && (
                <span className="text-red-500 text-xs">{formErrors.email}</span>
              )}
              <span className="text-gray-500 text-xs ml-auto">
                {formData.email.length}/{CHAR_LIMITS.email}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Pesan Anda"
              rows="4"
              className={`border ${
                formErrors.message ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 w-full`}
              maxLength={CHAR_LIMITS.message}
              required
            ></textarea>
            <div className="flex justify-between mt-1">
              {formErrors.message && (
                <span className="text-red-500 text-xs">
                  {formErrors.message}
                </span>
              )}
              <span className="text-gray-500 text-xs ml-auto">
                {formData.message.length}/{CHAR_LIMITS.message}
              </span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`${
              isSubmitting
                ? "bg-teal-700 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-800"
            } text-white py-3 px-6 rounded-md font-semibold w-full transition duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Mengirim...
              </>
            ) : (
              "Kirim Pesan"
            )}
          </button>
        </div>
      </div>

      {/* Notification Popup */}
      {showNotification && (
        <div
          className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
            showNotification
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div
            className={`flex items-center p-4 rounded-lg shadow-lg ${
              notificationContent.isSuccess
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <div
              className={`flex-shrink-0 mr-3 ${
                notificationContent.isSuccess
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {notificationContent.isSuccess ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div
              className={`text-sm font-medium ${
                notificationContent.isSuccess
                  ? "text-green-800"
                  : "text-red-800"
              }`}
            >
              {notificationContent.message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section1;
