import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { InvoiceModule } from './invoice/invoice.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [InvoiceModule, OrderModule],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, UserService, ProductService],
})
export class AppModule {}
