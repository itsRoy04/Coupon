import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async home(@Res() res: Response) {
    try {
      res.status(200).json({
        message: 'Server is Running',
      });
    } catch (error) {
      res.status(500).json({
        message: 'An error occurred',
        error: error.message,
      });
    }
  }

  @Post('send-email')
  async sendMailer(@Body() body: { email: string; couponCode: string; details: string }, @Res() response: Response) {
    try {
        console.log('/sendMailer')
        
      const { email, couponCode, details } = body;
    //   const data = {
    //     "email": "roymail@yopmail.com",
    //     "couponCode": "COUPON123",
    //     "details": "Discount of 20% on all items"
    //   }
      
      await this.appService.sendCouponMail(email, couponCode, details);
    //   await this.appService.sendCouponMail(data.email, data.couponCode,data.details);
      return response.status(200).json({
        message: 'Email sent successfully',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'Failed to send email',
        error: error.message,
      });
    }
  }
}
