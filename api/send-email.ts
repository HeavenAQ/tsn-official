import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { config } from 'dotenv'

config({ path: '.env.local' })

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, serviceType, title, body } = req.body

    const { error } = await resend.emails.send({
      from: 'info@heaven-labs.net',
      to: 'info@twtsn.co.jp',
      replyTo: email,
      subject: `【お問い合わせ】${title} - ${serviceType}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #18181b 0%, #27272a 100%); padding: 32px 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #ffffff; font-weight: 600; letter-spacing: 0.5px;">新しいお問い合わせ</h1>
            <p style="margin: 8px 0 0; font-size: 14px; color: #a1a1aa;">New Contact Form Submission</p>
          </div>

          <!-- From badge -->
          <div style="padding: 24px 24px 0;">
            <div style="display: inline-block; background-color: #f4f4f5; border-radius: 20px; padding: 8px 16px;">
              <span style="font-size: 13px; color: #52525b;">來自 / From: </span>
              <a href="mailto:${email}" style="font-size: 13px; color: #18181b; font-weight: 600; text-decoration: none;">${email}</a>
            </div>
          </div>

          <!-- Content -->
          <div style="padding: 24px;">
            <!-- Subject line -->
            <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e4e4e7;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">主旨 / Subject</p>
              <p style="margin: 0; font-size: 18px; color: #18181b; font-weight: 600;">${serviceType} - ${title}</p>
            </div>

            <!-- Info grid -->
            <div style="display: table; width: 100%; margin-bottom: 24px;">
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; padding-right: 12px; vertical-align: top;">
                  <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">名字 / Name</p>
                  <p style="margin: 0; font-size: 16px; color: #18181b; font-weight: 500;">${name}</p>
                </div>
                <div style="display: table-cell; width: 50%; padding-left: 12px; vertical-align: top;">
                  <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">サービス / Service</p>
                  <p style="margin: 0; font-size: 16px; color: #18181b; font-weight: 500;">${serviceType}</p>
                </div>
              </div>
            </div>

            <!-- Message body -->
            <div>
              <p style="margin: 0 0 12px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">內文 / Message</p>
              <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 20px;">
                <p style="margin: 0; font-size: 15px; color: #27272a; line-height: 1.6; white-space: pre-wrap;">${body}</p>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #fafafa; padding: 20px 24px; text-align: center; border-top: 1px solid #e4e4e7;">
            <p style="margin: 0; font-size: 12px; color: #a1a1aa;">This email was sent from the TSN website contact form.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Send email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
