import http from 'k6/http';
import { spikeStages } from '../config/stages';

export let options = {
    stages: spikeStages
};

export default function () {
    http.get('https://www.google.com');
}
