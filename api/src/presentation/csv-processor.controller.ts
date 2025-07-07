import {ReceiveCsvUseCase} from "@/domain/receive-csv.use-case";
import {inject, injectable} from "tsyringe";

@injectable()
export class CSVProcessorController {
    constructor(
        @inject(ReceiveCsvUseCase) private readonly receiveCsv: ReceiveCsvUseCase,
    ) {
    }

    async putCsv() {
        return this.receiveCsv.handle('teste')
    }
}
