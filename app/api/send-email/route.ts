import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, service, additionalInformations } = await req.json()

    const data = await resend.emails.send({
      from: 'brunomarthe72@gmail.com',
      to: ['dev.brunomarthe@gmail.com'],
      subject: `Nova mensagem de ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone/Celular:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensagem:</strong></p>
        <p>Solicito um orçamento para ${service}</p>
        <p>Algumas informações adicionais: <br/> ${additionalInformations} </p>
      `,
    })

    return NextResponse.json({ status: 'success', data })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
