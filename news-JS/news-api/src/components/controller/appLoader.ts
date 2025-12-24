import Loader from './loader';
import { LoaderOptions } from '../interfaces/news';

class AppLoader extends Loader {
    private baseLink: string;
    private options: LoaderOptions;

    constructor() {
        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
