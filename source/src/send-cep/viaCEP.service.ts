import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, lastValueFrom } from 'rxjs';

@Injectable()
export class ViaCEPService {
  constructor(private httpService: HttpService) {}

  private readonly logger = new Logger(ViaCEPService.name);
  http: string = process.env.CEP_BASE_URL;

  async getCep(cep: string): Promise<Cep.CepResponse> {
    const { data } = await lastValueFrom<{ data: Cep.CepResponse }>(
      this.httpService.get(`${this.http}/${cep}/json`).pipe(
        catchError((error: AxiosError) => {
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );
    this.logger.log('Info', data);
    return data;
  }

  async getCepFromUf(
    uf: string,
    city: string,
    logradouro: string,
  ): Promise<Cep.CepResponse[]> {
    const { data } = await lastValueFrom<{ data: Cep.CepResponse[] }>(
      this.httpService
        .get(`${this.http}/${uf}/${city}/${logradouro}/json`)
        .pipe(
          catchError((error: AxiosError) => {
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );
    this.logger.log('Info', data);
    return data;
  }
}
