import React from 'react'
import { Lang } from '../types'
import { content, t } from '../data/siteContent'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

interface Props { lang: Lang }

const ContactInfo: React.FC<Props> = ({ lang }) => {
  return (
    <section id="contact" className="py-16 animate-fade-up">
      <div className="mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          {t(content.contact.title, lang)}
        </h2>
        <p className="mt-5 text-center text-slate-700">
          {t(content.contact.text, lang)}
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href={`mailto:${content.contact.email}`} className="p-5 rounded-lg border hover:shadow-sm transition flex items-center gap-3">
            <FaEnvelope className="text-slate-700" />
            <div>
              <div className="text-sm text-slate-500">{t(content.contact.emailLabel, lang)}</div>
              <div className="font-medium text-slate-800">{content.contact.email}</div>
            </div>
          </a>
          <a href={`tel:${content.contact.phone}`} className="p-5 rounded-lg border hover:shadow-sm transition flex items-center gap-3">
            <FaPhone className="text-slate-700" />
            <div>
              <div className="text-sm text-slate-500">{t(content.contact.phoneLabel, lang)}</div>
              <div className="font-medium text-slate-800">{content.contact.phone}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
