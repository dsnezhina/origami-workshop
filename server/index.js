import express from 'express';
import serverRenderer from './middleware/renderer';
import path from 'path';
import getOrigamis from './middleware/origamis';
import auth from './middleware/auth';
import cookieParser from 'cookie-parser';

const PORT = 3000;

// initialize the application and create the routes
const app = express();
const router = express.Router();

app.use(cookieParser('secret'));

router.use('^/$', auth, getOrigamis, serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));


router.use('*', serverRenderer);
app.use(router);

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});