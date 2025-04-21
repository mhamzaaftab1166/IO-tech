import { Provider } from "react-redux";
import { store } from "@/store";
import "@/styles/globals.css";
import Navbar from "@/componnets/NavBar";
import Footer from "@/componnets/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
