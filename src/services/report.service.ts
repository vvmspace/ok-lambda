const { MQTT_CONNECTION_STRING } = process.env;
import { Client, connect } from "mqtt";

export class ReportService {
    private client: Client;

    constructor() {
        this.client = connect(MQTT_CONNECTION_STRING);
    }

    async publish(topic: string, payload: string | number): Promise<any> {
        await new Promise(res => this.client.publish(topic, `${payload}`, res));
        return;
    }

}