import {CsvReaderUseCase} from "@/domain/csv-reader.use-case";
import {CsvProcessorUseCase} from "@/domain/csv-processor.use-case";
import {inject, injectable} from "tsyringe";

@injectable()
export class ReceiveCsvUseCase {
    constructor(
        @inject(CsvReaderUseCase) private readonly csvReader: CsvReaderUseCase,
        @inject(CsvProcessorUseCase) private readonly csvProcessor: CsvProcessorUseCase
    ) {
    }

    async handle(
        filename: string,
        cols: string[],
    ) {
        const fileData = await this.csvReader.handle(
            filename,
            cols,
        );

        // console.log('\n')
        // console.log('Handling ReceiveCsvUseCase'.green.bold)
        // console.log(fileData)

        await this.csvProcessor.handle(fileData);
    }
}
