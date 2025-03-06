import * as React from 'react';

interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname, lastname, email, phone, subject, message
}) => (
  <div>
    <h2>New Enquiry recieved.</h2>
    <div>
      First Name: {firstname}
    </div>
    <div>
      last Name: {lastname}
    </div>
    <div>
      Email: {email}
    </div>
    <div>
      Phone: {phone}
    </div>
    <div>
      Subject: {subject}
    </div>
    <div>
      Message: {message}
    </div>
  </div>
);
