"use client";

import React from "react";
import { Typography, Input, Textarea, Button, Card } from "@material-tailwind/react";
import { useLanguage } from "../contexts/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:app@collabry.io?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            {t('contact.title') || 'Contact Us'}
          </Typography>
          <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle') || 'Have questions about Niyi5? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'}
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <Typography variant="h4" color="blue-gray" className="mb-6">
              {t('contact.getInTouch') || 'Get in Touch'}
            </Typography>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <i className="fas fa-envelope text-lg"></i>
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    {t('contact.email') || 'Email'}
                  </Typography>
                  <Typography className="text-gray-600">
                    app@collabry.io
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <i className="fas fa-map-marker-alt text-lg"></i>
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    {t('contact.address') || 'Address'}
                  </Typography>
                  <Typography className="text-gray-600">
                    Barbaros, Şebboy Sk. No:4/1 İç Kapı No:1<br />
                    34758 Ataşehir/İstanbul, Turkey
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <i className="fab fa-linkedin text-lg"></i>
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    {t('contact.linkedin') || 'LinkedIn'}
                  </Typography>
                  <a 
                    href="https://www.linkedin.com/company/collabrytr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    linkedin.com/company/collabrytr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                    {t('contact.name') || 'Name'} *
                  </Typography>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.namePlaceholder') || 'Your full name'}
                    required
                    className="!border-gray-300 focus:!border-blue-500"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                    {t('contact.email') || 'Email'} *
                  </Typography>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.emailPlaceholder') || 'your.email@example.com'}
                    required
                    className="!border-gray-300 focus:!border-blue-500"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </div>

              <div>
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  {t('contact.subject') || 'Subject'} *
                </Typography>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t('contact.subjectPlaceholder') || 'What is this about?'}
                  required
                  className="!border-gray-300 focus:!border-blue-500"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              <div>
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  {t('contact.message') || 'Message'} *
                </Typography>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.messagePlaceholder') || 'Tell us more about your inquiry...'}
                  required
                  rows={5}
                  className="!border-gray-300 focus:!border-blue-500"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              <Button 
                type="submit" 
                color="blue" 
                size="lg" 
                className="w-full"
              >
                {t('contact.sendMessage') || 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact; 