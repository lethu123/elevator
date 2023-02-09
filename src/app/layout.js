import "public/assets/style.css";
import "public/assets/css/bootstrap.css";
import "public/assets/css/dark.css";

import "public/assets/css/font-icons.css";
import "public/assets/css/animate.css";

import "public/assets/css/magnific-popup.css";
import "public/assets/css/custom.css";

import "public/assets/css/fonts.css";
import "public/assets/css/blog.css";
// import '@/public/assets/css/colors.php?color=F39887'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="stretched search-overlay">{children}</body>
    </html>
  );
}
