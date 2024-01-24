import http from 'k6/http';
import { stressStages } from '../config/stages';

export let options = {
    stages: stressStages
};

export default function () {
    http.get('https://www.google.com');
}
