import http from 'k6/http';
import { soakStages } from '../config/stages';

export let options = {
    stages: soakStages
};

export default function () {
    http.get('https://www.google.com');
}
