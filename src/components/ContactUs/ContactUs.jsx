import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import contactBanner from '../../assets/market_banner.png';
import '../../styles/ContactUs.css';

const OWNER_PHONE = "+91-9754265265";
const OWNER_EMAIL = "gurudevmarket555@gmail.com";

export default function ContactUs() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', address: '', mobile: '', purpose: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.address || !form.mobile || !form.purpose) {
      alert('Please fill all required fields.');
      return;
    }
    // MAILTO fallback: You can upgrade later to use EmailJS or a backend.
    window.location.href = `mailto:${OWNER_EMAIL}?subject=Shop Enquiry from ${form.name}&body=
      Name: ${form.name}%0A
      Address: ${form.address}%0A
      Mobile: ${form.mobile}%0A
      Purpose: ${form.purpose}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <img src={contactBanner} alt="Contact banner" className="contact-banner" />
      <h1>{t('contact_us')}</h1>
      <div className="contact-info-row">
        <div className="contact-details-box">
          <h2>{t('contact_details') || "Owner Contact"}</h2>
          <p><strong>{t('phone') || "Phone"}:</strong> <a href={`tel:${OWNER_PHONE}`}>{OWNER_PHONE}</a></p>
          <p><strong>{t('email') || "Email"}:</strong> <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a></p>
          <div className="contact-desc">
            {t('contact_owner_note') || "You may call or email us for urgent queries or fill the booking form alongside."}
          </div>
        </div>
        <form className="contact-form-box" onSubmit={handleSubmit}>
          <h2>{t('enquiry_form') || "Shop Booking / Enquiry"}</h2>
          <label>
            {t('full_name') || "Full Name"}<span>*</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            {t('address') || "Address"}<span>*</span>
            <input type="text" name="address" value={form.address} onChange={handleChange} required />
          </label>
          <label>
            {t('mobile_number') || "Mobile Number"}<span>*</span>
            <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required maxLength={12} minLength={10} pattern="[0-9]+" />
          </label>
          <label>
            {t('purpose_open_shop') || "Purpose (What shop do you want to open?)"}<span>*</span>
            <input type="text" name="purpose" value={form.purpose} onChange={handleChange} required />
          </label>
          <button className="contact-form-btn" type="submit">{t('send_enquiry') || "Send Enquiry"}</button>
          {submitted && <div className="contact-form-success">{t('thank_you_enquiry') || "Thank you! Your enquiry was sent."}</div>}
        </form>
      </div>
    </div>
  );
}
