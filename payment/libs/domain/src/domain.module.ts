import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

/**
 * Módulo que encapsula los servicios del dominio de la aplicación.
 * 
 * Este módulo expone el servicio `DomainService` para que pueda ser reutilizado
 * en otros módulos que lo importen.
 *
 * @module DomainModule
 */
@Module({
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
