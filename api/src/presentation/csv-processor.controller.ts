import {ReceiveCsvUseCase} from "@/domain/receive-csv.use-case";
import {inject, injectable} from "tsyringe";

@injectable()
export class CSVProcessorController {
    constructor(
        @inject(ReceiveCsvUseCase) private readonly receiveCsv: ReceiveCsvUseCase,
    ) {
    }

    async putCsv() {
        const multerFilename = 'uploads/data.csv'

        return this.receiveCsv.handle(
            multerFilename,
            ['from','to','amount']
        )
    }
}
