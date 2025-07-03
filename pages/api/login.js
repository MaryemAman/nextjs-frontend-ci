import withSession from '@/lib/session'
import axios from 'axios';

export default withSession(async (req, res) => {
    // const { username, password } = await req.body;
    const { username, password } = req.body;
    // const loginUrl = process.env.BACKEND_API_HOST + '/api/login';
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
        ? process.env.API_URL
        : process.env.NEXT_PUBLIC_API_URL;

    const loginUrl = `${baseUrl}/api/login`;

    console.log("Attempting login with:", username, "at", loginUrl);

    try {
        const response = await axios.post(loginUrl, { username, password });
        console.log("Backend response:", response.data);

        if (response.status === 200 && response.data.logged_in) {
            const { user, token } = response.data;
            

            req.session.set('user', user);
            req.session.set('api_token', token);
            await req.session.save();
            return res.json({ logged_in: true });
        }

        const status = response.data.status;
        const errors = response.data.errors;
        return res.json({ status, logged_in: false, errors });

    } catch (err) {
        let status = 'Something went wrong';
        let errors = null;

        console.log(err);
        if (err.response) {
            status = err.response.data.status || err.response.data.message;
            errors = err.response.data.errors;
        }
        console.log("Login error:", status, errors);
        return res.json({ logged_in: false, status, errors });
    }
});