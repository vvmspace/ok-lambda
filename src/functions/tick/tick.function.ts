import { Callback, Handler, Context } from "aws-lambda";
import { ReportService } from "@ok/services";

export const handler: Handler = async (event: any, context: Context, callback: Callback): Promise<void> => {
    const reporter = new ReportService();
    await reporter.publish('random', Math.random())
    callback(null, true);
};