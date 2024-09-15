import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailerService) {}

  // Function to send coupon email
  async sendCouponMail(toEmail: string, couponCode: string, details: string) {
    const message = `
      You received a new coupon!
      Coupon Code: ${couponCode}
      Details: ${details}
      Coupon URL : https://coupon-kappa.vercel.app/
    `;

    await this.mailService.sendMail({
      from: 'roy@gmail.com',
      to: toEmail,
      subject: 'Redeem, Your Coupon Right Now',
      text: message,
    });
  }
}
