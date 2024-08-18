import "./globals.css";
export const metadata = {
  title: "MindMap App",
  description: "MindMap App",
};
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Providers from "@/redux/Provider";
const linkFontsAwesome =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={linkFontsAwesome} />
      </head>
      <UserProvider>
        <body className="h-screen">
          <Providers>{children}</Providers>
        </body>
      </UserProvider>
    </html>
  );
}
