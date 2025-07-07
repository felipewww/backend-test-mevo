import './core'
import {container} from "tsyringe";
import {CSVProcessorController} from "@/presentation/csv-processor.controller";

// console.log(process.env.APP_ENV);
const controller = container.resolve(CSVProcessorController)

controller.putCsv()
    .catch(console.error)
