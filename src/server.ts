import 'dotenv/config'
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));