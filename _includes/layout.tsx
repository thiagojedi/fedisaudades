import type { FunctionComponent as FC } from "npm:preact";

const Layout: FC = ({ children }) => (
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Eternas Saudades</title>

            <link rel="stylesheet" href="./styles/global.css" />
        </head>
        <body>
            {children}
        </body>
    </html>
);

export default Layout;
