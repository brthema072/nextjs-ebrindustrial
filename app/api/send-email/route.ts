import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, service, additionalInformations } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'dev.brunomarthe@gmail.com',
        pass: 'passkey',
      },
    })

    await transporter.sendMail({
      to: 'contato@ebrindustrial.com',
      subject: 'Envio de Orçamento EBR Industrial',
      html: `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Novo Orçamento Solicitado</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333333;
                    background-color: #f5f5f5;
                }
                
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                .banner {
                    background-color: #2165e9;
                    width: 100%;
                    padding: 40px 20px;
                    text-align: center;
                }
                
                .title {
                    color: #ffffff;
                    font-size: 28px;
                    font-weight: bold;
                    margin: 0;
                    text-align: center;
                }
                
                .content {
                    padding: 30px;
                }
                
                .info-section {
                    margin-bottom: 25px;
                }
                
                .info-item {
                    margin-bottom: 12px;
                    font-size: 16px;
                }
                
                .info-label {
                    font-weight: bold;
                    color: #2165e9;
                }
                
                .message-section {
                    background-color: #f8f9fa;
                    padding: 20px;
                    border-left: 4px solid #2165e9;
                    margin-top: 25px;
                }
                
                .footer {
                    text-align: center;
                    padding: 20px;
                    color: #666666;
                    font-size: 14px;
                    border-top: 1px solid #eeeeee;
                    margin-top: 30px;
                }
                
                @media (max-width: 600px) {
                    .container {
                        margin: 10px;
                    }
                    
                    .content {
                        padding: 20px;
                    }
                    
                    .title {
                        font-size: 24px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <!-- Banner com fundo azul -->
                <div class="banner">
                    <h1 class="title">Nova Solicitação de Orçamento</h1>
                </div>
                
                <!-- Corpo do email -->
                <div class="content">
                    <div class="info-section">
                        <div class="info-item">
                            <span class="info-label">Nome:</span> ${name}
                        </div>
                        <div class="info-item">
                            <span class="info-label">Email:</span> ${email}
                        </div>
                        <div class="info-item">
                            <span class="info-label">Telefone/Celular:</span> ${phone}
                        </div>
                        <div class="info-item">
                            <span class="info-label">Empresa:</span> ${company}
                        </div>
                    </div>
                    
                    <div class="message-section">
                        <p><strong>Mensagem:</strong></p>
                        <p>Solicito um orçamento para ${service}</p>
                        <p><strong>Algumas informações adicionais</strong>: <br/> ${additionalInformations}</p>
                    </div>
                </div>
                
                <!-- Rodapé -->
                <div class="footer">
                    <p>Esta é uma mensagem automática. Por favor, não responda este email.</p>
                    <p>©${new Date().getFullYear()} - Todos os direitos reservados</p>
                </div>
            </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
