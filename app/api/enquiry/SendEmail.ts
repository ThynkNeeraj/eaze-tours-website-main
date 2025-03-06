import { EmailTemplate } from '../../../components/PackageEnquiry';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic'; // static by default, unless reading the request

const resend = new Resend(process.env.RESEND_API_KEY);
const enquiry_email = process.env.ENQUIRY_EMAIL == null ? "thynk.rahul@gmail.com" : process.env.ENQUIRY_EMAIL

export async function POST(request: Request) {
  try {
    let request_data: { ["firstname"]: string, ["lastname"]: string, ["email"]: string, ["phone"]: number, ["subject"]: string, ["message"]: string } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Website <site@eazetours.com>',
      to: ["thynk.rahul@gmail.com", enquiry_email],
      subject: "New Enquiry - " + request_data.subject,
      react: EmailTemplate({ firstname: request_data.firstname, lastname: request_data.lastname, email: request_data.email, phone: request_data.phone, subject: request_data.subject, message: request_data.message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
